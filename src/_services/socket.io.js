import {io} from 'socket.io-client'

const socket = io('http://localhost:9999')
socket.on("connect", () => {
    console.log(socket.id);
  });
  
export default socket