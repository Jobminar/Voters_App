import express from 'express'
import SearchController from './Controller/Search/Search.js'
import ReportvoterController from './Controller/ReportVoterController.js'
import KaryakarthaLoginController from './Controller/KaryakarthaLoginController.js'
import VoterDetailsController from './Controller/VotersDetailsController.js'
import ReportIncidentController from './Controller/ReportIncidentController.js'

//

const router=express.Router()

router.post("/postvoters",VoterDetailsController.createUser)
router.get("/getvoters",VoterDetailsController.getAllUsers)
router.delete("/deletevoter/:id",VoterDetailsController.deleteVoter)
router.get("/getvoter/:id", VoterDetailsController.getVoterById);


router.get("/api/search",SearchController.searchByHouse)



router.post('/postreportincident',ReportIncidentController.createReportIncident)
router.get("/getreportincident",ReportIncidentController.getReportIncident)

router.post("/postreportvoter",ReportvoterController.createReportVoter)
router.get("/getreportvoter",ReportvoterController.getReportController)



router.post("/karyakarthasignup", KaryakarthaLoginController.ksignup);
router.post("/karyakarthalogin", KaryakarthaLoginController.klogin);
router.get("/getallkaryakarta",KaryakarthaLoginController.getAll)
router.put("/updatekaryakarta/:username",KaryakarthaLoginController.update)
router.delete("/deletekaryakarta/:username",KaryakarthaLoginController.deleteUser)

export default router

