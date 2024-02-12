import bcrypt from "bcryptjs";
import Karyakartha from "../Model/KaryakarthaLoginModel.js";

const LoginController = {
  ksignup: async (req, res) => {
    try {
      const { username, password,phone } = req.body;

      const existingUser = await Karyakartha.findOne({ username });

      if (existingUser) {
        return res.status(400).json({ error: 'Karyakartha with this Karyakartha name already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new Karyakartha({
        username,
        password: hashedPassword,
        phone,
        verified:false
      });

      await newUser.save();

      res.status(201).json({ message: 'Karyakartha registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  klogin: async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await Karyakartha.findOne({ username });

      if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }

      if (!user.verified) {
        return res.status(401).json({ error: 'Your are not verified please contact admin.' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }

      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getAll:async (req, res) => {
    try {
      const allKaryakartas = await Karyakartha.find();
      res.status(200).json(allKaryakartas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  deleteUser:async (req, res) => {
    try {
      const { username } = req.params;
  
      // Find the user by username
      const user = await Karyakartha.findOne({ username });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Delete the user
      await Karyakartha.deleteOne({ username });
  
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  update:async (req, res) => {
    try {
      const { username } = req.params;
  
      // Find the user by username
      const user = await Karyakartha.findOne({ username });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Update the verified field to true
      user.verified = true;
  
      // Save the updated user
      await user.save();
  
      res.status(200).json({ message: 'User information updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // deleteUser:async (req, res) => {
  //   try {
  //     const { username } = req.params;
  
  //     // Find the user by username
  //     const user = await Karyakartha.findOne({ username });
  
  //     if (!user) {
  //       return res.status(404).json({ error: 'User not found' });
  //     }
  
  //     // Delete the user
  //     await Karyakartha.deleteOne({ username });
  
  //     res.status(200).json({ message: 'User deleted successfully' });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // }
};

export default LoginController;
