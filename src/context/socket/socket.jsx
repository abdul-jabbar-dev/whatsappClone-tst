import { useCallback, createContext, useState, useEffect } from 'react'
/* eslint-disable no-undef */
import { io } from 'socket.io-client';
import CV from '../../config';
import PropTypes from 'prop-types'

import AuthContextHook from '../auth/AuthContextHook';
const URL = /* process.env.NODE_ENV === 'production' ? undefined : */ CV.SERVER_URL


export const SocketContext = createContext(null);
export default function SocketProvider({ children }) {
    const { user, clearUser } = AuthContextHook()
    const [socket, setSocket] = useState()
    const [message, setMessage] = useState([])


    const sendMessage = useCallback((msg) => {
        if (socket) {
            socket.emit("event:message", { message: msg });
        }
    }, [socket])



    const onMessageRec = useCallback((msg) => {
        console.log("From Server Msg Rec", msg);
        const { message } = JSON.parse(msg)
        setMessage((prev) => [...prev, message]);
    }, []);

    useEffect(() => {
        const _socket = io(URL);

        _socket.connect();
        _socket.auth = user;
        _socket.on("users", (users) => {
            JSON.parse(users).forEach((user) => {
                user.self = user.userID === _socket.id;
            });
        })
        _socket.on("message", onMessageRec);


        _socket.on("connect_error", (err) => {
            if (err.message === "invalid username") {
                clearUser()
            }
        });
        _socket.on("connect_errors", (err) => {
            if (err.message === "invalid username") {
                console.log(err)
            }
        });
        setSocket(_socket);
        return () => {
            if (_socket.connected) {
                setSocket(null);
                _socket.on("disconnect",(e)=>{
                    _socket.emit('out',JSON.stringify(e))
                })
                _socket.disconnect();
            }
        };
    }, [clearUser, onMessageRec, user]);

    const activeUsers = () => {
        const activeUsers = []
        socket.on("user connected", (user) => {
            activeUsers.push(user)
        });
        console.log(activeUsers)
        return activeUsers
    }



    return (
        <SocketContext.Provider value={{ sendMessage, message, activeUsers, socket }}>
            {children}
        </SocketContext.Provider>
    )
}
SocketProvider.propTypes = {
    children: PropTypes.any
}
