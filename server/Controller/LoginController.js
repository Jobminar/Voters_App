import bcryptjs from "bcryptjs";
import Login from "../Model/LoginModel.js";

const LoginController = {
  signup: async (req, res) => {
    try {
      const { username, password, phone } = req.body;

      const existingUser = await Login.findOne({ username });

      if (existingUser) {
        return res
          .status(400)
          .json({ error: "User with this username already exists" });
      }

      const hashedPassword = await bcryptjs.hash(password, 10);

      const newUser = new Login({
        username,
        password: hashedPassword,
        phone,
      });

      await newUser.save();

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await Login.findOne({ username });

      if (!user) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      const isPasswordValid = await bcryptjs.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

export default LoginController;
