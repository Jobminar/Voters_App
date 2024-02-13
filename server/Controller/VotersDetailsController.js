// VoterDetailsController.js
import Voters from '../Model/VotersModel.js';

const VoterDetailsController = {
  createUser: async (req, res) => {
    try {
      const votersData = req.body; 
      const newVoter = await Voters.create(votersData);
      res.status(201).json(newVoter);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const allVoters = await Voters.find();
      res.status(200).json(allVoters);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  
  getVoterById: async (req, res) => {
    try {
      const { id } = req.params;
      const voter = await Voters.findOne({
        $or: [{ EPIC_NO: id }, { H_NO: id }, {  MOBILE_NO: id }]
      });
  
      if (!voter) {
        return res.status(404).json({ error: "Voter not found" });
      }
  
      res.status(200).json(voter);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteVoter: async (req, res) => {
    try {
      const { id } = req.params; // Use destructuring for better readability
      const deletedVoter = await Voters.findByIdAndDelete(id);

      if (!deletedVoter) {
        return res.status(404).json({ error: "Voter not found" });
      }

      res.status(200).json({ message: "Voter deleted successfully", deletedVoter });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

export default VoterDetailsController;
