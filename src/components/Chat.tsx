import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdTransitEnterexit } from "react-icons/md";
import useAuthStore from "../store/authStore";
import { getConversationDetailByID, getConversationsByUserID, addMessage } from "../services/conversationService";
import { WEBSOCKET_CONN } from "../services";

const Chat: React.FC = () => {

    const [isShowed, setIsShowed] = useState<boolean>(false);
    const [conversations, setConversations] = useState<any>();
    const [currentConversation, setCurrentConversation] = useState<any>([]);
    const [messages, setMessages] = useState<any[]>([]);
    const [newMessage, setNewMessage] = useState<string>("");
    const user = useAuthStore((state) => state.user);
    const socketRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getConversationsByUserID(Number(user?.id));
            setConversations(data);
        };
        fetchData();
    
    }, [user]);


    const handleSelectConversation = async (currentID: number) => {
        const { data } = await getConversationDetailByID(currentID);
        setCurrentConversation(data);
        console.log(data)
        setMessages([]);
        connectToWebSocket(currentID);
    };

    const connectToWebSocket = (conversationID: number) => {
        if (socketRef.current) {
            socketRef.current.close();
        }

        const ws = new WebSocket(`${WEBSOCKET_CONN}/chat?conversation_id=${conversationID}`);
        socketRef.current = ws;

        ws.onmessage = (event) => {
            const receivedMessage = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, receivedMessage]);
        };

        ws.onclose = () => {
            console.log("Websocket connection closed");
        };
    };

    const handleSendMessage = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (socketRef.current && newMessage.trim() !== "") {
                const payload = {
                    conversation_id: currentConversation.ID,
                    participant_id: user?.id,
                }
                socketRef.current.send(JSON.stringify(payload));
                await addMessage(payload);
                setNewMessage("");
            }
        }
    };
    

    return (
        <div>
            {isShowed ? (
                <div className="w-[40%] h-[60%] flex fixed right-5 bottom-1 bg-gray-100 shadow-xl rounded-t-md px-2 py-3 divide-x">
                    <div className="w-[35%] flex flex-col">
                        <h1 className='text-darkcyan font-extrabold text-xl mb-1 p-1'>temuka Chats</h1>
                        <hr/>
                        <div className="flex flex-col gap-2 mt-1">
                            {conversations?.map((item: any) => (
                                <div className="flex p-2 items-center gap-1 hover:bg-gray-200 cursor-pointer rounded-md mx-1" onClick={() => handleSelectConversation(item.ID)} key={item.ID}>
                                    <img src="/assets/DefaultUser.png" alt="" className="w-6 h-6"/>
                                    <div className="flex flex-col w-[100%]">
                                        <div className="flex justify-between">
                                            <p className="text-xs font-semibold">{item?.Title}</p>
                                            <p className="text-xs text-gray-700">{item?.UpdatedAt || ""}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-[65%] flex flex-col divide-y p-1 justify-between">
                        <div className="flex p-1 mb-1 items-center justify-between">
                            <h1 className='text-black font-extrabold text-lg'>{currentConversation?.Title || "Grup kamu"}</h1>
                            <FaChevronDown className="cursor-pointer" onClick={() => setIsShowed(false)}/>
                        </div>
                        <div className="flex-grow overflow-y-scroll">
                            {messages.map((message, index) => (
                                <div className="flex p-2 items-center gap-1 hover:bg-gray-100 cursor-pointer">
                                    <img src="/assets/DefaultUser.png" alt="" className="w-6 h-6"/>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex gap-2">
                                            <p className="text-xs font-semibold">Pengguna</p>
                                            <p className="text-xs text-gray-700">08:00 pm</p>                                
                                        </div>
                                        <p className="text-xs">Test pesan pertama</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between p-2 mx-1 bg-white items-center rounded-lg">
                            <input 
                                type="text" 
                                placeholder="Pesan" 
                                className="outline-none"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyDown={handleSendMessage}
                            />
                            <MdTransitEnterexit className="focus:text-midcyan text-darkcyan text-xl"/>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-[20%] fixed right-5 bottom-1 bg-gray-100 shadow-lg rounded-t-md p-2 hover:bg-gray-200 cursor-pointer" onClick={() => setIsShowed(true)}>
                    <div className="flex">
                            <h1 className='text-darkcyan font-extrabold text-xl'>temuka Chats</h1>
                        <div className=""></div>
                    </div>
                </div>           
            )}
        </div>
    )
}

export default Chat;