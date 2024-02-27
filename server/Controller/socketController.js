// socketController.js
import { Server } from 'socket.io';

const setupSocket = (server) => {
  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', (data) => {
      console.log(`Message from ${data.username}: ${data.message}`);

      // Broadcast the user's message to all connected clients, including the admin
      io.emit('chat message', {
        username: data.username,
        message: data.message
      });

      // Simulate a reply from the admin after a short delay (e.g., 1 second)
      setTimeout(() => {
        const adminReply = `This is a reply from Admin to ${data.username}!`;
        // Emit the admin's reply to the specific user who sent the message
        io.emit('chat message', {
          username: 'Admin',
          message: adminReply
        });
      }, 1000);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
};

export default setupSocket;
