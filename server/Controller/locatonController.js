import Location from "../Model/LocationModel.js";

const locationController = {
  createLocation: async (req, res) => {
    try {
      const { longitude, latitude, userId } = req.body;
      if (!longitude || !latitude || !userId) {
        return res
          .status(400)
          .json({ message: "Required fields longitude, latitude, userId" });
      }

      const newLocation = await Location({ longitude, latitude, userId });
      const savedLocation = await newLocation.save();
      res
        .status(201)
        .json({ message: "Successfully added the data", savedLocation });
    } catch (error) {
      res.status(500).json({ error: "Failed to create location" });
    }
  },

  getAllLocations: async (req, res) => {
    try {
      const allLocations = await Location.find();
      res.status(200).json({ locations: allLocations });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch locations" });
    }
  },
};

export default locationController;
