import express from 'express'

import UserController from "./Controller/VotersController.js";
import SearchController from "./Controller/Search/Search.js"

const router=express.Router()

router.post("/postvoters",UserController.createUser)
router.get("/getvoters",UserController.getAllUsers)
router.delete("/deletevoter/:id",UserController.deleteVoter)


router.get("/api/search",SearchController.searchBy)

export default router