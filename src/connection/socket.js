/* eslint-disable no-undef */
import { io } from 'socket.io-client';
import CV from '../config';

 
 

class SOCKET {
    URL= /* process.env.NODE_ENV === 'production' ? undefined : */ CV.SERVER_URL
     _io = io(this.URL, { autoConnect: false });

    constructor(){ 
        this._io.connect()
    }
}

const _socket = new SOCKET()
export default _socket