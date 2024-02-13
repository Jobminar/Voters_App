import Canvas from "../Model/CanvasModel.js";

const CanvasController = {
  createCanvas: async (req, res) => {
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
        image,
      } = req.body;

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
