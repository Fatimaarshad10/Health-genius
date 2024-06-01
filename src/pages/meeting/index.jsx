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
    const decodedToken = jwtDecode(room);
    const { exp } = decodedToken;
    const [isTokenExpired, setIsTokenExpired] = useState(false);
    const user = useSelector((state) => state?.auth?.user);
    const [myStream, setMyStream] = useState(null);
    const [remoteEmailId, setRemoteEmailId] = useState('');
    const videoContainerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds

            if (exp && currentTime > exp) {
                setIsTokenExpired(true);
            }
        }, 1000); // Check every second

        return () => clearInterval(interval);
    }, [exp]);
    const { createOffer, createAnwers, setRemoteAns, sendStream, remoteStream, peer } = usePeer();
    const socket = io(`${socketEndpoint}`);

    const handleUserJoined = useCallback(async (data) => {
        const { emailId } = data;
        console.log("New user joined room", emailId);
        const offer = await createOffer();
        socket.emit('call-user', { emailId, offer });
        setRemoteEmailId(emailId);
    }, [createOffer]);

    const handleIncomingCall = useCallback(async (data) => {
        const { from, offer } = data;
        console.log('Incoming call from', from, offer);
        const ans = await createAnwers(offer);
        socket.emit('call-accepted', { emailId: from, ans });
        setRemoteEmailId(from);
    }, [createAnwers]);

    const handleCallAccepted = useCallback(async (data) => {
        const { ans } = data;
        console.log("Call Got accepted", ans);
        await setRemoteAns(ans);
    }, [ setRemoteAns]);

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
            // socket.disconnect();
        };
    }, [handleUserJoined, handleIncomingCall, handleCallAccepted]);

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
    }, []);

    useEffect(() => {
        peer.addEventListener('negotiationneeded', handleNegotiation);
        return () => {
            peer.removeEventListener('negotiationneeded', handleNegotiation);
        };
    }, [handleNegotiation]);




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
            // Stop all tracks in the media stream
            if (myStream) {
                myStream.getTracks().forEach(track => track.stop());
            }
            // Emit a message to the server that the user is leaving the meeting
            socket.emit("leave-meeting", { emailId: user.email, roomId: room });

            // Properly close the peer connection
            if (peer) {
                peer.close();
            }
            // Navigate the user to the appropriate page
            if (user.role === 'patient') {
                navigate(`/review/${room}`);
            } else {
                navigate('/');
            }
        }
    }, [isTokenExpired]);


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
                                {myStream && <ReactPlayer url={myStream} playing muted/>}
                                {remoteStream && <ReactPlayer url={remoteStream} playing />}
                            </div>
                        </div>
                        {/* Control Buttons */}
                        <div className="bg-black flex items-center justify-center py-4">
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
