import express from 'express'

import UserController from "./Controller/VotersController.js";

const router=express.Router()

router.post("/postvoters",UserController.createUser)
router.get("/getvoters",UserController.getAllUsers)
router.delete("/deletevoter/:id",UserController.deleteVoter)


export default router