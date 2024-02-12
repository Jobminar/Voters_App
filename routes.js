import express from 'express'

import UserController from "./Controller/VotersController.js";
import ReportIncidentController from './Controller/ReportIncidentController.js';
import ReportvoterController from './Controller/ReportVoterController.js';

const router=express.Router()

router.post("/postvoters",UserController.createUser)
router.get("/getvoters",UserController.getAllUsers)
router.delete("/deletevoter/:id",UserController.deleteVoter)


router.post('/postreporticident',ReportIncidentController.createReportIncident)
router.get("/getreportincident",ReportIncidentController.getReportIncident)

router.post("/postreportvoter",ReportvoterController.createReportVoter)
router.get("/getreportvoter",ReportvoterController.getReportController)


export default router