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
};

export default CanvasController;
