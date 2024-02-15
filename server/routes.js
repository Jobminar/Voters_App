import express from 'express'
import ReportvoterController from './Controller/ReportVoterController.js'
import KaryakarthaLoginController from './Controller/KaryakarthaLoginController.js'
import VoterDetailsController from './Controller/VotersDetailsController.js'
import ReportIncidentController from './Controller/ReportIncidentController.js'
import CanvasController from './Controller/canvasController.js'

const router=express.Router()

router.post("/postvoters",VoterDetailsController.createUser)
router.get("/getvoters",VoterDetailsController.getAllUsers)
router.delete("/deletevoter/:id",VoterDetailsController.deleteVoter)
router.get("/getvoter/:id", VoterDetailsController.getVoterById);


router.post('/postreportincident',ReportIncidentController.createReportIncident)
router.get("/getreportincident",ReportIncidentController.getReportIncident)

router.post("/postreportvoter",ReportvoterController.createReportVoter)
router.get("/getreportvoter",ReportvoterController.getReportController)


router.post("/postcanvas",CanvasController.createCanvas)
router.get("/getconvas",CanvasController.getCanvas)

router.post("/karyakarthasignup", KaryakarthaLoginController.ksignup);
router.post("/karyakarthalogin", KaryakarthaLoginController.klogin);
router.get("/getallkaryakarta",KaryakarthaLoginController.getAll)
router.put("/updatekaryakarta/:username",KaryakarthaLoginController.update)
router.delete("/deletekaryakarta/:username",KaryakarthaLoginController.deleteUser)

export default router

