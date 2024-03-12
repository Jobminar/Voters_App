// socketController.js
import { Server } from 'socket.io';

const setupSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', (data) => {
      console.log(`Message from ${data.message}:${data.phoneNo}`);

      // Broadcast the user's message to all connected clients, including the sender
      io.emit('chat message', {
        username: data.phoneNo,
        message: data.message,
        phoneNo: data.phoneNo,
      });
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
};

export default setupSocket;
