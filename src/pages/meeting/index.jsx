import React, { useEffect, useCallback, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { socketEndpoint } from "../../config/environment";
import { usePeer } from '../provider/peer';
import ReactPlayer from 'react-player';
import { useNavigate } from "react-router";
import { jwtDecode } from 'jwt-decode';

function Meeting() {
    const { room } = useParams();
    console.log(room)
    const decodedToken = jwtDecode(room);
    const { exp } = decodedToken;
    const [isTokenExpired, setIsTokenExpired] = useState(false);
    const user = useSelector((state) => state?.auth?.user);
    const [myStream, setMyStream] = useState(null);
    const [remoteEmailId, setRemoteEmailId] = useState('');
    const [isVideoEnabled, setIsVideoEnabled] = useState(true);
    const [isAudioEnabled, setIsAudioEnabled] = useState(true);
    const [isScreenSharing, setIsScreenSharing] = useState(false);
    const [isStreaming, setIsStreaming] = useState(false);
    const videoContainerRef = useRef(null);
    const navigate = useNavigate();
    useEffect(() => {
        const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds
        if (exp && currentTime > exp) {
            setIsTokenExpired(true);
        }
    }, [exp]);

    const { createOffer, createAnwers, setRemoteAns, sendStream, remoteStream, peer } = usePeer();
    const socket = io(`${socketEndpoint}`);

    const handleUserJoined = useCallback(async (data) => {
        const { emailId } = data;
        console.log("New user joined room", emailId);
        const offer = await createOffer();
        socket.emit('call-user', { emailId, offer });
        setRemoteEmailId(emailId);
    }, [createOffer, socket]);

    const handleIncomingCall = useCallback(async (data) => {
        const { from, offer } = data;
        console.log('Incoming call from', from, offer);
        const ans = await createAnwers(offer);
        socket.emit('call-accepted', { emailId: from, ans });
        setRemoteEmailId(from);
    }, [createAnwers, socket]);

    const handleCallAccepted = useCallback(async (data) => {
        const { ans } = data;
        console.log("Call Got accepted", ans);
        await setRemoteAns(ans);
    }, [setRemoteAns]);

    const getUserMediaStream = useCallback(async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        });
        setMyStream(stream);
        sendStream(stream);
    }, [sendStream]);

    useEffect(() => {
        getUserMediaStream();
    }, [getUserMediaStream]);

    useEffect(() => {
        socket.on("connect", () => {
            socket.emit("join-room", {
                emailId: user.email,
                roomId: room
            });
        });

        socket.on("user-joined", handleUserJoined);
        socket.on("incoming-call", handleIncomingCall);
        socket.on("call-accepted", handleCallAccepted);

        return () => {
            socket.off('user-joined', handleUserJoined);
            socket.off('incoming-call', handleIncomingCall);
            socket.off("call-accepted", handleCallAccepted);
            socket.disconnect();
        };
    }, [socket, user, room, handleUserJoined, handleIncomingCall, handleCallAccepted]);

    const handleNegotiation = useCallback(async () => {
        try {
            await peer.setLocalDescription(await peer.createOffer());
            const localOffer = peer.localDescription;
            socket.emit('call-user', {
                emailId: remoteEmailId,
                offer: localOffer
            });
        } catch (error) {
            console.error('Error creating or setting local description:', error);
        }
    }, [peer, remoteEmailId, socket]);

    useEffect(() => {
        peer.addEventListener('negotiationneeded', handleNegotiation);
        return () => {
            peer.removeEventListener('negotiationneeded', handleNegotiation);
        };
    }, [handleNegotiation]);

    const toggleVideo = () => {
        if (myStream) {
            const videoTracks = myStream.getVideoTracks();
            videoTracks.forEach(track => track.enabled = !track.enabled);
            setIsVideoEnabled(videoTracks[0].enabled);
        }
    };

    const toggleAudio = () => {
        if (myStream) {
            const audioTracks = myStream.getAudioTracks();
            audioTracks.forEach(track => track.enabled = !track.enabled);
            setIsAudioEnabled(audioTracks[0].enabled);
        }
    };

    const toggleScreenShare = async () => {
        if (isScreenSharing) {
            console.log("Stopping screen sharing...");
            getUserMediaStream();
            setIsScreenSharing(false);
        } else {
            console.log("Starting screen sharing...");
            try {
                const screenStream = await navigator.mediaDevices.getDisplayMedia({
                    video: true
                });
                console.log("Screen stream obtained:", screenStream);
                setMyStream(screenStream);
                sendStream(screenStream);
                setIsScreenSharing(true);

                // Stop screen sharing when the stream ends
                screenStream.getTracks().forEach(track => {
                    track.onended = () => {
                        console.log("Screen sharing ended.");
                        getUserMediaStream();
                        setIsScreenSharing(false);
                    };
                });
            } catch (error) {
                console.error("Error starting screen sharing:", error);
            }
        }
    };

    const toggleStreaming = () => {
        if (myStream) {
            sendStream(myStream);
            setIsStreaming(!isStreaming);
        } else {
            console.warn('myStream is not available');
        }
    };

    const toggleFullScreen = () => {
        if (videoContainerRef.current) {
            if (!document.fullscreenElement) {
                videoContainerRef.current.requestFullscreen().catch(err => {
                    console.error(`Error attempting to enable full-screen mode: ${err.message}`);
                });
            } else {
                document.exitFullscreen().catch(err => {
                    console.error(`Error attempting to exit full-screen mode: ${err.message}`);
                });
            }
        }
    };

    const handleChat = () => {
        if (myStream) {
            myStream.getTracks().forEach(track => track.stop());
        }
        socket.emit("leave-meeting", { emailId: user.email, roomId: room });
        peer.close();
        navigate('/chats');

    };
    useEffect(() => {
        if (isTokenExpired) {
            if (myStream) {
                myStream.getTracks().forEach(track => track.stop());
            }

        }
    }, [isTokenExpired, myStream, peer, room, socket, navigate]);


    return (
        <>
            {isTokenExpired ? (
                <>
                    <div className="flex justify-center items-center h-screen">
                        <p className="text-red-500 text-xl font-bold">Meeting link expired</p>
                    </div>

                </>
            ) : (
                <>
                    <div className="flex flex-col h-screen">
                        {/* Video Display Area */}
                        <div className="flex-1 relative" ref={videoContainerRef}>
                            <div className="absolute inset-0 flex items-center justify-center bg-black">
                                {/* Video Player */}
                                {myStream && <ReactPlayer url={myStream} playing />}
                                {remoteStream && <ReactPlayer url={remoteStream} playing />}
                            </div>
                        </div>
                        {/* Control Buttons */}
                        <div className="bg-black flex items-center justify-center py-4">
                            <button
                                onClick={toggleStreaming}
                                className="mx-2 px-4 py-2 ">
                                <svg className={`w-6 h-6 ${isStreaming ? 'text-white' : 'text-gray-800'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
                                    <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
                                </svg>
                            </button>
                            <button
                                onClick={toggleVideo}
                                className="mx-2 px-4 py-2 ">
                                <svg className={`w-6 h-6 ${isVideoEnabled ? 'text-white' : 'text-gray-600'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z" />
                                </svg>
                            </button>
                            <button
                                onClick={toggleAudio}
                                className="mx-2 px-4 py-2 ">
                                <svg className={`w-6 h-6 ${isAudioEnabled ? 'text-white' : 'text-gray-600'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 12 5.419 3.871A1 1 0 0 0 16 15.057V2.943a1 1 0 0 0-1.581-.814L9 6m0 6V6m0 6H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7m-5 6h3v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5Zm15-3a3 3 0 0 1-3 3V6a3 3 0 0 1 3 3Z" />
                                </svg>
                            </button>
                            <button
                                onClick={toggleScreenShare}
                                className="mx-2 px-4 py-2 ">
                                <svg className={`w-6 h-6 ${isScreenSharing ? 'text-white' : 'text-gray-600'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 15h8m-8-4h8m-8-4h8M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm16 14H4m16-2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2" />
                                </svg>
                            </button>
                            <button
                                onClick={toggleFullScreen}
                                className="mx-2 px-4 py-2 ">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16M12 4v16M16 8l4-4m0 0-4 4M8 16l-4 4m0 0 4-4" />
                                </svg>
                            </button>
                            <button
                                onClick={handleChat}
                                className="mx-2 px-4 py-2  text-black rounded bg-white">
                                Disconnect
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Meeting;
