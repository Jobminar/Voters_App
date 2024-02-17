// adminController.js
import Admin from '../Model/AdminModel.js'

const adminController = {
  sendMessageToUser: async (req, res) => {
    try {
      const { message } = req.body;

      // Validate if the message is present in the request
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const adminMessage = new Admin({ message });
      const savedMessage = await adminMessage.save();

      // Emit the new message to all connected clients
      adminController.io.emit('newAdminMessage', { message: savedMessage.message });

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

  receiveMessageFromAdmin: async (req, res) => {
    try {
      // Assuming you want to get the latest message from the admin
      const latestAdminMessage = await Admin.findOne().sort({ _id: -1 }).limit(1);

      if (!latestAdminMessage) {
        return res.status(404).json({ error: "No messages from admin found" });
      }

      res.status(200).json({ message: latestAdminMessage.message });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

export default adminController;
