import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { searchUser } from "../../apis/user";
import { chat, allChat } from "../../apis/chat";
import io from "socket.io-client";
import { apiEndpoint, socketEndpoint } from "../../config/environment";
import axios from "axios";
import { allInbox } from "../../apis/inbox";


function ChatChecker() {
    const user = useSelector((state) => state?.auth?.user);
    const token = useSelector((state) => state?.auth?.token);
    const detail = useSelector((state) => state?.auth?.detail);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState(null);
    const [message, setMessage] = useState("")
    const [sendChat, setSendChat] = useState(null);
    const [getChat, setGetChat] = useState(null);
    const [inboxData, setInboxData] = useState([]);
    const [error, setError] = useState(null);
    const [inboxId, setInboxId] = useState("");
    const [receiver, setReceiver] = useState("");
    const [name, setName] = useState("");
    useEffect(() => {
        const socket = io(`${socketEndpoint}`);
        socket.on("connect", () => {
            socket.emit("addUser", { userId: user._id });
        });

        socket.on("messageReceived", (savedMessage) => {
            setGetChat((prevChat) => {
                prevChat = prevChat || [];
                return [...prevChat, savedMessage];

            });
        });
        return () => {
            socket.disconnect();
        };

    }, [inboxId, getChat]);

    useEffect(() => {
        const fetchInboxData = async () => {
            try {
                const response = await axios.get(`${apiEndpoint}inbox`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setInboxData(response.data.data.inbox)


            } catch (error) {
                setError(error.response.data.message);
            }
        };

        fetchInboxData();
    }, [token, sendChat]);

    // Function to check if a string is a URL
    const isURL = (str) => {
        const pattern = /^(http|https):\/\/[^ "]+$/;
        return pattern.test(str);
    };


    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const queryString = `?first_name=${searchQuery}`;
            const response = await searchUser(queryString);
            setSearchResults(response);

        } catch (error) {
            console.error(error.message);
        }
    };
    useEffect(() => {
        const getAllChat = async () => {
            try {
                const response = await allChat(inboxId);
                setGetChat(response.data.chat);

            } catch (error) {
                console.error(error.message);
            }
        };
        getAllChat()
    }, [inboxId, sendChat])
    const handleInboxClick = async (data) => {
        setInboxId(data);
        const oneInbox = await allInbox(data)
        const one = oneInbox?.data?.inbox
        setName(one?.senderId._id === user._id ? one.receiverId.first_name : one.senderId.first_name)
        setReceiver(one?.senderId._id === user._id ? one.receiverId._id : one.senderId._id);
    };
    const handleSubmitChat = async (e) => {
        e.preventDefault();
        const payload = {
            message,
            sender: user._id,
            receiver: receiver,
            inboxId: inboxId
        };

        const result = await chat(payload);
        setSendChat(result)
        if (result) {
            setMessage('');
        }
    };

    return (
        <>
            <div class="p-4 ">
                <div class="w-full  ">
                    <div class="flex h-full ">
                        <div class="flex-1  w-full h-full ">
                            <div class="main-body container m-auto  h-full flex flex-col">
                                <div class="main flex-1 flex flex-col">

                                    <div class="flex-1 flex h-full ">
                                        <div class="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6 ">
                                            <div class="relative w-full mb-5">
                                                <form onSubmit={handleSearch}>

                                                    <input type="search"
                                                        value={searchQuery}
                                                        onChange={(e) => setSearchQuery(e.target.value)}
                                                        class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-indigo-400 focus:border-indigo-400 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-indigo-900" placeholder="Search" required />
                                                    <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-indigo-900 rounded-e-lg border hover:bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-400 dark:hover:bg-indigo-400 dark:focus:ring-indigo-900">
                                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                        </svg>
                                                        <span class="sr-only">Search</span>
                                                    </button>
                                                </form>

                                            </div>
                                            {inboxData?.map((data) => (

                                                <div class=" overflow-y-scroll bg-white border border-gray-100 rounded-lg h-96 " key={data._id} onClick={() => handleInboxClick(data._id)}>
                                                    {data?.senderId._id === user._id ? (<>
                                                        <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white border-2 mb-4 rounded p-4 flex shadow-md border-l-4 border-indigo-500">
                                                            <div class="flex-2">
                                                                <div class="w-12 h-12 relative">
                                                                    <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-indigo-900 rounded-full ">
                                                                        <span class="font-medium text-white ">{data.receiverId.first_name.charAt(0).toUpperCase()}</span>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="flex-1 px-2">
                                                                <span class="font-medium ">{data.receiverId.first_name}</span>

                                                                <div class="truncate w-32"><span class="text-gray-800">{data.lastMessage}</span></div>
                                                            </div>
                                                        </div>
                                                    </>) : (<>


                                                        <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white border-2 mb-4 rounded p-4 flex shadow-md border-l-4 border-indigo-500">
                                                            <div class="flex-2">
                                                                <div class="w-12 h-12 relative">
                                                                    <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-indigo-900 rounded-full ">
                                                                        <span class="font-medium text-white ">{data.senderId.first_name.charAt(0).toUpperCase()}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="flex-1 px-2">
                                                                <span class="font-medium ">{data.senderId.first_name}</span>

                                                                <div class="truncate w-32"><span class="text-gray-800">{data.lastMessage}</span></div>
                                                            </div>
                                                        </div>
                                                    </>)}
                                                </div>


                                            ))}
                                        </div>
                                        <div class="chat-area flex-1 flex flex-col">
                                            {inboxId ? (
                                                <>
                                                    <div class="flex-3">
                                                        <h2 class="text-xl py-1 mb-8 border-b-2 border-gray-200">Chatting with <b>{name}</b></h2>
                                                    </div>
                                                    <div class=" w-full  overflow-y-scroll bg-white border border-gray-100 rounded-lg h-96">
                                                        {getChat?.map((data) => (
                                                            <>
                                                                {(data?.sender?._id === user._id) ? (
                                                                    <>
                                                                        <div class="message me mb-4 flex text-right">
                                                                            <div class="flex-1 px-2">

                                                                                <div class="inline-block bg-indigo-500  p-2 px-6 text-white  max-w-30 break-all ">
                                                                                    {isURL(data.message) ? (
                                                                                        <a href={data.message} rel="noopener noreferrer" className=" hover:text-black" >
                                                                                            {data.message}
                                                                                        </a>
                                                                                    ) : (
                                                                                        <span>{data.message}</span>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <div class="message mb-4 flex">
                                                                            <div class="flex-2">
                                                                                <div class="w-12 h-12 relative">
                                                                                    <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-indigo-900 rounded-full ">
                                                                                        <span class="font-medium text-white ">{data?.sender?.first_name.charAt(0).toUpperCase()}</span>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                            <div class="flex-1 px-2">
                                                                                <div class="inline-block bg-indigo-300 p-2 px-6 text-white   max-w-30 break-all ">

                                                                                    {isURL(data.message) ? (
                                                                                        <a href={data.message} rel="noopener noreferrer" className=" hover:text-black">
                                                                                            {data.message}
                                                                                        </a>
                                                                                    ) : (
                                                                                        <span>{data.message}</span>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </>
                                                        ))}





                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div class="flex-3">

                                                        <h2 class="text-xl py-1 mb-8 border-b-2 border-gray-200">Start Chatting</h2>
                                                    </div>
                                                    <div className="flex justify-center items-center h-full">
                                                        <span className="text-gray-500">No chatting to show</span>
                                                    </div>
                                                </>
                                            )}



                                            <div class="flex-2  ">
                                                <div class="write bg-white shadow flex rounded-lg">
                                                    <div class="flex-3 flex content-center items-center text-center p-4 pr-0">
                                                        <span class="block text-center text-gray-400 hover:text-gray-800">
                                                            <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" class="h-6 w-6"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                        </span>
                                                    </div>
                                                    <div class="flex-1">
                                                        <textarea name="message"
                                                            value={message}
                                                            onChange={(e) => setMessage(e.target.value)}
                                                            class="w-full block outline-none py-4 px-4 bg-transparent" rows="1" placeholder="Type a message..." autofocus></textarea>
                                                    </div>
                                                    <div class="flex-2 w-32 p-2 flex content-center items-center">
                                                        <div class="flex-1 text-center">
                                                            <span class="text-gray-400 hover:text-gray-800">
                                                                <span class="inline-block align-text-bottom">
                                                                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div class="flex-1">
                                                            <button
                                                                onClick={handleSubmitChat}
                                                                class="bg-blue-400 w-10 h-10 rounded-full inline-block">
                                                                <span class="inline-block align-text-bottom">
                                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4 text-white"><path d="M5 13l4 4L19 7"></path></svg>
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChatChecker