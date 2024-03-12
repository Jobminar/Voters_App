import Message from "../Model/messageModel.js";

const messageController={

    createMessage:async(req,res)=>{
        try{
        const {message,phoneNo}=req.body

        if(!message || !phoneNo){
            return res.status(400).json({message:"Required fields  message phoneNo"})
        }
        const newMessage=await Message({message,phoneNo})
        const savedMessage=await newMessage.save()
        res.status(200).json({message:"Creating message successfull",savedMessage})
    }
    catch(error){
        return res.status(500).json({error:"Failed to send message"})
    }

    },

    getAllMessages:async(req,res)=>{
        try{
            const allMessage=await Message.find()
            res.status(200).json(allMessage)
        }
        catch(error){
            res.status(500).json({error:"internal server failed to get the messages"})
        }
    },

  
    getUserNameMessage: async (req, res) => {
        try {
          const { phoneNo } = req.params;
    
          const getUser = await Message.find({ phoneNo });
    
          if (!getUser || getUser.length === 0) {
            return res.status(404).json({ message: "phoneNo not found" });
          }
    
          res.status(200).json(getUser);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server failed to getUsername message' });
        }
      },
      deleteAllMessages: async (req, res) => {
        try {
          // Use deleteMany to delete all messages
          const deleteAll = await Message.deleteMany();
    
          res.status(200).json({
            message: 'All messages deleted successfully',
            deletedCount: deleteAll.deletedCount,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server failed to delete messages' });
        }
      },
}
export default messageController