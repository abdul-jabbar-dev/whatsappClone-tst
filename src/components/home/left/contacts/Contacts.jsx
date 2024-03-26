
import { useEffect, useState } from "react";
import SocketContextHook from "../../../../context/socket/SocketContextHook";
import PropTypes from 'prop-types';
export default function Contacts({ setCurrentUser }) {
    const { socket } = SocketContextHook()
    const [activeUsers, setActiveUsers] = useState([])

    useEffect(() => {
    
        socket.on("users", (users) => {
            users.forEach((user) => {
                user.self = user.userID === socket.id;
                setActiveUsers(user);
            });
            // put the current user first, and then sort by username
            this.users = users.sort((a, b) => {
                if (a.self) return -1;
                if (b.self) return 1;
                if (a.username < b.username) return -1;
                return a.username > b.username ? 1 : 0;
            });
        });


        socket.on("user connected", (user) => {
            inti
            setActiveUsers([...activeUsers,user]); 
        });
    }, [activeUsers, socket]);

    console.log(activeUsers)

    return (
        <>
            {activeUsers.map((d, i) =>
                <div key={i} onClick={() => setCurrentUser(d)} className="bg-white hover:bg-gray-100 px-3 flex items-center cursor-pointer">
                    <div>
                        {/* <img className="h-12 w-12 rounded-full"
                            src={d.img} /> */}
                    </div>
                    <div className="ml-4 flex-1 border-b py-[13px]">
                        <div className="flex items-bottom justify-between">
                            <p className="text-gray-700">
                                {d.userName}
                            </p>
                            <p className="text-xs  text-gray-500">
                                {d.time}
                            </p>
                        </div>
                        <p className="text-gray-500 mt-1 text-sm  h-5 overflow-hidden">
                            {d.lastMessage}
                        </p>
                    </div>
                </div>)}
        </>
    )
}
Contacts.propTypes = {
    setCurrentUser: PropTypes.func
}
