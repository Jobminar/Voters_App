// userController.js
import User from '../Model/UserModel.js'

const userController = {
  sendMessageToAdmin: async (req, res, io) => {
    try {
      const { message } = req.body;

      // Validate if the message is present in the request
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const userMessage = new User({ message });
      const savedMessage = await userMessage.save();

      // Emit the new message to all connected clients
      io.emit('newUserMessage', { message: savedMessage.message });

      // Respond with only the necessary information
      res.status(201).json({ message: savedMessage.message });
    } catch (error) {
      console.error(error);

      // Handle specific validation errors
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
      }

      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  receiveMessageFromUser: async (req, res) => {
    try {
      // Assuming you want to get the latest message from the user
      const latestUserMessage = await User.findOne().sort({ _id: -1 }).limit(1);

      if (!latestUserMessage) {
        return res.status(404).json({ error: "No messages from user found" });
      }

      res.status(200).json({ message: latestUserMessage.message });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

export default userController;
