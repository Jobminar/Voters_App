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
  deleteAllLocation: async (req, res) => {
    try {
      // Delete all locations
      await Location.deleteMany({});
      res.status(200).json({ message: "All locations deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete all locations" });
    }
  },
  getAllLocationsForUser: async (req, res) => {
    try {
      const { userId } = req.params; // Assuming userId is provided in the URL params
      if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
      }

      // Fetch all locations for the provided user ID, sorted by creation time
      const allLocations = await Location.find({ userId }).sort({ createdAt: 1 });

      if (allLocations.length === 0) {
        return res.status(404).json({ message: "No locations found for the user" });
      }

      // Extract latitude and longitude values from the locations
      const coordinates = allLocations.map(location => ({
        latitude: location.latitude,
        longitude: location.longitude
      }));

      res.status(200).json({ userId, coordinates });
    } catch (error) {
      console.error('Error fetching locations:', error);
      res.status(500).json({ error: "Failed to fetch locations" });
    }
  }
};



export default locationController;
