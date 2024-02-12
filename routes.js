import express from 'express'

import UserController from "./Controller/VotersController.js";
import SearchController from "./Controller/Search/Search.js"
import ReportIncidentController from './Controller/ReportIncidentController.js';
import ReportvoterController from './Controller/ReportVoterController.js';
import KaryakarthaLoginController from './Controller/KaryakarthaLoginController.js'
const router=express.Router()

router.post("/postvoters",UserController.createUser)
router.get("/getvoters",UserController.getAllUsers)
router.delete("/deletevoter/:id",UserController.deleteVoter)
router.get("/getvoter/:id", UserController.getVoterById);


router.get("/api/search",SearchController.searchByHouse)
router.post('/postreporticident',ReportIncidentController.createReportIncident)
router.get("/getreportincident",ReportIncidentController.getReportIncident)

router.post("/postreportvoter",ReportvoterController.createReportVoter)
router.get("/getreportvoter",ReportvoterController.getReportController)


router.get("/api/search",SearchController.searchByHouse)



router.post("/karyakarthasignup", KaryakarthaLoginController.ksignup);
router.post("/karyakarthalogin", KaryakarthaLoginController.klogin);
router.get("/getallkaryakarta",KaryakarthaLoginController.getAll)
router.put("/updatekaryakarta/:username",KaryakarthaLoginController.update)
router.delete("/deletekaryakarta/:username",KaryakarthaLoginController.deleteUser)

export default router