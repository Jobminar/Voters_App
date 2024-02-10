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
        phone
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

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }

      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

export default LoginController;
