import bcrypt from "bcryptjs";
import Karyakartha from "../Model/KaryakarthaLoginModel.js";

const KaryakarthaController = {
  ksignup: async (req, res) => {
    try {
      const { username, password, phoneNo, area, assembly, parlament } =
        req.body;

      const existingUser = await Karyakartha.findOne({ username });

      if (existingUser) {
        return res.status(400).json({
          error: "Karyakartha with this Karyakartha name already exists",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new Karyakartha({
        username,
        password: hashedPassword,
        phoneNo,
        area,
        lead,
        assembly,
        parlament,
        verified: false,
      });

      await newUser.save();

      res.status(201).json({ message: "Karyakartha registered successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  klogin: async (req, res) => {
    try {
      const { phoneNo, password } = req.body;

      const user = await Karyakartha.findOne({ phoneNo });

      if (!user) {
        return res.status(401).json({ error: "Invalid phone or password" });
      }

      if (!user.verified) {
        return res
          .status(401)
          .json({ error: "Your are not verified please contact admin." });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid phone or password" });
      }

      // Send user details in the response
      res.status(200).json({
        message: "Login successful",
        user: {
          _id: user._id,
          username: user.username,
          phone: user.phone,
          // Add any other user details you want to include in the response
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getAll: async (req, res) => {
    try {
      const allKaryakartas = await Karyakartha.find();
      res.status(200).json(allKaryakartas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { username } = req.params;

      // Find the user by username
      const user = await Karyakartha.findOne({ username });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Delete the user
      await Karyakartha.deleteOne({ username });

      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  verifyKaryakartha: async (req, res) => {
    try {
      const { _id } = req.params;

      // Find the Karyakartha by _id
      const karyakartha = await Karyakartha.findById(_id);

      if (!karyakartha) {
        return res.status(404).json({ error: "Karyakartha not found" });
      }

      // Update the verified field to true
      karyakartha.verified = true;

      // Save the updated Karyakartha
      await karyakartha.save();

      res.status(200).json({ message: "Karyakartha verified successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  kSignupVerified: async (req, res) => {
    try {
      const { username, password, phoneNo, area, assembly, parlament, lead } =
        req.body;

      const existingUser = await Karyakartha.findOne({ username });

      if (existingUser) {
        return res.status(400).json({
          error: "Karyakartha with this Karyakartha name already exists",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new Karyakartha({
        username,
        password: hashedPassword,
        phoneNo,
        area,
        lead,
        assembly,
        parlament,
        verified: true, // Set the verified field to true during signup
      });

      await newUser.save();

      res.status(201).json({ message: "Karyakartha registered successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

export default KaryakarthaController;
