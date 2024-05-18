import Dashboard from "../../pages/Dashboard"
import { useSelector } from "react-redux";
import ChatChecker from "./anotherChat";
import Navbar from "../../pages/navbar";
function Chats() {
    const user = useSelector((state) => state?.auth?.user);

    return (
        <>
            {user?.role === "patient" ? (
                <>
                    <Navbar />
                    <ChatChecker />
                </>
            ) : (
                <>
                    <Dashboard />

                    <div class="p-4 sm:ml-64">
                        <Navbar />
                        <ChatChecker />
                    </div>
                </>
            )}


        </>
    )
}
export default Chats