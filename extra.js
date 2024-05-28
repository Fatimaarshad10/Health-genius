   // useEffect(() => {
    //     const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds
    //     if (exp && currentTime > exp) {
    //         setIsTokenExpired(true);
    //     }
    // }, [exp]);
    // <div className="flex flex-col h-screen">
    // {/* Video Display Area */}
    // <div className="flex-1 relative" ref={videoContainerRef}>
    //     <div className="absolute inset-0 flex items-center justify-center ">
          
    //     </div>
    //       {/* Video Player */}
       

    // </div>

// const toggleVideo = () => {
//     if (myStream) {
//         const videoTracks = myStream.getVideoTracks();
//         videoTracks.forEach(track => track.enabled = !track.enabled);
//         setIsVideoEnabled(videoTracks[0].enabled);
//     }
// };

// const toggleAudio = () => {
//     if (myStream) {
//         const audioTracks = myStream.getAudioTracks();
//         audioTracks.forEach(track => track.enabled = !track.enabled);
//         setIsAudioEnabled(audioTracks[0].enabled);
//     }
// };

// const toggleScreenShare = async () => {
//     if (isScreenSharing) {
//         console.log("Stopping screen sharing...");
//         getUserMediaStream();
//         setIsScreenSharing(false);
//     } else {
//         console.log("Starting screen sharing...");
//         try {
//             const screenStream = await navigator.mediaDevices.getDisplayMedia({
//                 video: true
//             });
//             console.log("Screen stream obtained:", screenStream);
//             setMyStream(screenStream);
//             sendStream(screenStream);
//             setIsScreenSharing(true);

//             // Stop screen sharing when the stream ends
//             screenStream.getTracks().forEach(track => {
//                 track.onended = () => {
//                     console.log("Screen sharing ended.");
//                     getUserMediaStream();
//                     setIsScreenSharing(false);
//                 };
//             });
//         } catch (error) {
//             console.error("Error starting screen sharing:", error);
//         }
//     }
// };

// const toggleStreaming = () => {
//     if (myStream) {
//         console.log(myStream)
//         sendStream(myStream);
//         setIsStreaming(!isStreaming);
//     } else {
//         console.warn('myStream is not available');
//     }
// };

// const toggleFullScreen = () => {
//     if (videoContainerRef.current) {
//         if (!document.fullscreenElement) {
//             videoContainerRef.current.requestFullscreen().catch(err => {
//                 console.error(`Error attempting to enable full-screen mode: ${err.message}`);
//             });
//         } else {
//             document.exitFullscreen().catch(err => {
//                 console.error(`Error attempting to exit full-screen mode: ${err.message}`);
//             });
//         }
//     }
// };

// const handleChat = () => {
//     if (myStream) {
//         myStream.getTracks().forEach(track => track.stop());
//     }
//     socket.emit("leave-meeting", { emailId: user.email, roomId: room });
//     peer.close();
    
//     navigate('/chats');

// };
// useEffect(() => {
//     if (isTokenExpired) {
//         if (myStream) {
//             myStream.getTracks().forEach(track => track.stop());
//         }
//         socket.emit("leave-meeting", { emailId: user.email, roomId: room });
//     peer.close();
//     if (user.role === 'patient') {
//         navigate('/review');
//     } else {
//         navigate('/');
//     }

//     }
// }, [isTokenExpired, myStream, peer, room, socket, navigate]);