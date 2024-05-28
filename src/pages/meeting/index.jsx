import React, { useEffect, useCallback, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { socketEndpoint } from "../../config/environment";
import { usePeer } from '../provider/peer';

function Meeting() {
    const { room } = useParams();
    const user = useSelector((state) => state?.auth?.user);
    const [myStream, setMyStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);
    const [remoteEmailId, setRemoteEmailId] = useState('');
    const myVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);

    const { createOffer, createAnwers, setRemoteAns, sendStream, peer } = usePeer();
    const socket = useRef(null); // Use useRef to prevent re-initialization

    const handleUserJoined = useCallback(async (data) => {
        const { emailId } = data;
        console.log("New user joined room", emailId);
        const offer = await createOffer();
        socket.current.emit('call-user', { emailId, offer });
        setRemoteEmailId(emailId);
    }, [createOffer]);

    const handleIncomingCall = useCallback(async (data) => {
        const { from, offer } = data;
        console.log('Incoming call from', from, offer);
        const ans = await createAnwers(offer);
        socket.current.emit('call-accepted', { emailId: from, ans });
        setRemoteEmailId(from);
    }, [createAnwers]);

    const handleCallAccepted = useCallback(async (data) => {
        const { ans } = data;
        console.log("Call Got accepted", ans);
        if (peer.signalingState === "stable" || peer.signalingState === "have-local-offer") {
            await setRemoteAns(ans);
        } else {
            console.warn(`Cannot set remote answer SDP in signaling state: ${peer.signalingState}`);
        }
    }, [setRemoteAns, peer.signalingState]);

    const getUserMediaStream = useCallback(async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: true
            });
            sendStream(stream);
            setMyStream(stream);
            console.log("My stream:", stream);
        } catch (error) {
            console.error("Error accessing media devices.", error);
        }
    }, [sendStream]);

    useEffect(() => {
        getUserMediaStream();
    }, [getUserMediaStream]);

    useEffect(() => {
        socket.current = io(socketEndpoint);

        socket.current.on("connect", () => {
            console.log("Socket connected");
            socket.current.emit("join-room", {
                emailId: user.email,
                roomId: room
            });
        });
        socket.current.on("user-joined", handleUserJoined);
        socket.current.on("incoming-call", handleIncomingCall);
        socket.current.on("call-accepted", handleCallAccepted);

        return () => {
            socket.current.off('user-joined', handleUserJoined);
            socket.current.off('incoming-call', handleIncomingCall);
            socket.current.off("call-accepted", handleCallAccepted);
            socket.current.disconnect();
        };
    }, [handleCallAccepted, handleIncomingCall, handleUserJoined, room, user.email]);

    const handleNegotiation = useCallback(async () => {
        const localOffer = peer.localDescription;
        socket.current.emit('call-user', {
            emailId: remoteEmailId,
            offer: localOffer
        });
    }, [remoteEmailId, peer.localDescription]);

    useEffect(() => {
        peer.addEventListener('negotiationneeded', handleNegotiation);
        peer.addEventListener('track', (event) => {
            const [stream] = event.streams;
            setRemoteStream(stream);
            console.log("Remote stream:", stream);
        });
        return () => {
            peer.removeEventListener('negotiationneeded', handleNegotiation);
            peer.removeEventListener('track', (event) => {
                const [stream] = event.streams;
                setRemoteStream(stream);
                console.log("Remote stream:", stream);
            });
        };
    }, [peer, handleNegotiation]);

    useEffect(() => {
        if (myVideoRef.current) {
            myVideoRef.current.srcObject = myStream;
        }
    }, [myStream]);

    useEffect(() => {
        if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = remoteStream;
        }
    }, [remoteStream]);

    return (
        <>
            {myStream && (
                <video
                    ref={myVideoRef}
                    autoPlay
                    muted
                    style={{ width: "100%", height: "auto" }}
                />
            )}
            {remoteStream && (
                <video
                    ref={remoteVideoRef}
                    autoPlay
                    style={{ width: "100%", height: "auto" }}
                />
            )}
            <button onClick={() => sendStream(myStream)}>Send my video</button>
        </>
    );
}

export default Meeting;
