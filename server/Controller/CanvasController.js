// CanvasController.js

import Canvas from "../Model/CanvasModel.js";
import multer from "multer";

// Set up multer storage for handling image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const CanvasController = {
  createCanvas: [
    upload.single("image"), // Handle single image upload
    async (req, res) => {
      try {
        const {
          name,
          fatherName,
          motherName,
          houseNo,
          colony,
          villageDivision,
          occupation,
          noOfVoter,
          noOfMigratedVoters,
          cast,
          category,
          religion,
          comments,
        } = req.body;

        // Check if an image was uploaded
        const image = req.file ? req.file.buffer.toString("base64") : "";

        const newCanvas = await Canvas.create({
          name,
          fatherName,
          motherName,
          houseNo,
          colony,
          villageDivision,
          occupation,
          noOfVoter,
          noOfMigratedVoters,
          cast,
          category,
          religion,
          comments,
          image,
        });

        res.json(newCanvas);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    },
  ],

  getCanvas: async (req, res) => {
    try {
      const canvases = await Canvas.find();
      res.json(canvases);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  deleteCanvasById: async (req, res) => {
    try {
      const { id } = req.params;

      const deletedCanvas = await Canvas.findByIdAndDelete(id);

      if (!deletedCanvas) {
        return res.status(404).json({ error: 'Canvas not found' });
      }

      res.status(200).json({ message: 'Canvas deleted successfully', deletedCanvas });
    } catch (error) {
      console.error('Error deleting Canvas:', error);
      res.status(500).json({ error: 'Failed to delete Canvas', details: error.message });
    }
  },
};

export default CanvasController;
