import Message from "../Model/messageModel.js";

const messageController={

    createMessage:async(req,res)=>{
        try{
        const {username,message}=req.body

        if(!username || !message){
            return res.status(400).json({message:"Required fields username message"})
        }
        const newMessage=await Message({username,message})
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
          const { username } = req.params;
    
          const getUser = await Message.find({ username });
    
          if (!getUser || getUser.length === 0) {
            return res.status(404).json({ message: "Username not found" });
          }
    
          res.status(200).json(getUser);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server failed to getUsername message' });
        }
      }
}
export default messageController