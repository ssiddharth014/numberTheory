import React, { createContext } from 'react'
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import {  Socket_Connect } from '../action/data';

const WebSocketContext = createContext(null)

export { WebSocketContext }

export default ({ children }) => {
    let socket;
    let ws;

    const dispatch = useDispatch();
    const [status,setstatus]= React.useState(false)
    React.useEffect(()=>{
        if (!socket) {
            async function sock(){socket =await io.connect("https://api.covid19India.org/data.json")}
            sock()
            
            if(socket && socket.connected==true)
            {
                socket.on("event://get-data", (msg) => {
                const payload = JSON.parse(msg);
                dispatch(Socket_Connect(payload));
            })
                setstatus(true)
            }
    
            
    
            ws = {
                socket: socket
            }
        }

    },[])

    

    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
}