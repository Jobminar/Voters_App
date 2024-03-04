import User from '../Model/UserModel.js';

const notificationController = {
  postNotification: async (req, res) => {
    try {
      const userId = req.body._id;
      const message = req.body.message;

      console.log('Received postNotification request:', { userId, message });

      const user = await User.findOne({ _id: userId });

      if (!user) {
        console.error(`User not found for _id: ${userId}`);
        return res.status(404).json({ error: 'User not found' });
      }

      user.notifications.push(message);
      await user.save();

      req.io.emit('adminNotification', { userId, message });

      console.log('postNotification function completed successfully');
      return res.status(200).json({ success: true, message: 'Notification sent' });
    } catch (error) {
      console.error('Error in postNotification:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  },

};

export default notificationController;
