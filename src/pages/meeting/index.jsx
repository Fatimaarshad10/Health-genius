import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { socketEndpoint } from "../../config/environment";
import { usePeer } from '../provider/peer';

function Meeting() {
    const { room } = useParams();
    const user = useSelector((state) => state?.auth?.user);
    const { createOffer } = usePeer();

    const socket = io(`${socketEndpoint}`);

    const handleUserJoined = useCallback(async (data) => {
        const { emailId } = data;
        console.log("New user joined room", emailId);
        const offer = await createOffer();
        socket.emit('call-user', { emailId, offer });
    }, [createOffer, socket]);

    const handleIncomingCall = useCallback(async (data) => {
        const { from, offer } = data;
        console.log('Incoming call from', from, offer);
    }, []);

    useEffect(() => {
        socket.on("connect", () => {
            socket.emit("join-room", { 
                emailId: user.email,
                roomId: room
            });
        });

        socket.on("user-joined", handleUserJoined);
        socket.on("incoming-call", handleIncomingCall);

        return () => {
            socket.disconnect();
        };
    }, [socket, user, room, handleUserJoined, handleIncomingCall]);

    return (
        <div>
            <strong>Room Page</strong>
        </div>
    );
}

export default Meeting;
