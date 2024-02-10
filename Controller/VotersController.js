import Voters from "../Model/VotersModel.js";

const UserController = {
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

  deleteVoter: async (req, res) => {
    try {
      const voterId = req.params.id; // Assuming you pass the voterId as a parameter in the URL
      const deletedVoter = await Voters.findByIdAndDelete(voterId);

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
export default UserController;
