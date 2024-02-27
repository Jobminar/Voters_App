import User from '../Model/UserModel.js';

const notificationController = {
  postNotification: async (req, res) => {
    try {
      // Get userId and message from the request or wherever applicable
      const userId = req.body.userId; // Replace with your actual way of getting userId
      const message = req.body.message; // Replace with your actual way of getting the message

      console.log('Received postNotification request:', { userId, message });

      // Find the user by userId
      const user = await User.findOne({ userId });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Update the user's notifications
      user.notifications.push(message);
      await user.save();

      // Admin notification logic (emit a socket.io event, send an email, etc.)
      // Example: emit a socket.io event to notify admin
      req.io.emit('adminNotification', { userId, message });

      console.log('postNotification function completed successfully');
      return res.status(200).json({ success: true, message: 'Notification sent' });
    } catch (error) {
      console.error('Error in postNotification:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  },

  // ... (rest of the code)

};

export default notificationController;
