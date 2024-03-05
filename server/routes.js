import express from "express";
import ReportvoterController from "./Controller/ReportVoterController.js";
import KaryakarthaLoginController from "./Controller/KaryakarthaLoginController.js";
import VoterDetailsController from "./Controller/VotersDetailsController.js";
import ReportIncidentController from "./Controller/ReportIncidentController.js";
import CanvasController from "./Controller/CanvasController.js";
import locationController from "./Controller/locatonController.js";
import notificationController from "./Controller/notificationController.js";
import otpController from "./Controller/otpController.js";
import messageController from "./Controller/messageController.js";
const router = express.Router();

router.post("/postvoters", VoterDetailsController.createUser);
router.get("/getvoters", VoterDetailsController.getAllUsers);
router.delete("/deletevoter/:id", VoterDetailsController.deleteVoter);
router.get("/getvoter/:id", VoterDetailsController.getVoterById);
router.post("/postreportvoter",ReportvoterController.createReportVoter)

router.get("/getreportvoter",ReportvoterController.getReportController)    
router.post("/getReportsByKaryakarthaId", ReportvoterController.getReportsByKaryakarthaId);
router.delete("/deletereportkaryakartha/:id",ReportvoterController.deleteReportById)


router.post("/postreportincident", ReportIncidentController.createReportIncident);
router.get("/getreportincident", ReportIncidentController.getReportIncident);
router.post("/getincidentreport",ReportIncidentController.getReportsIncidentByKaryakarthaId);

router.post("/postreportvoter", ReportvoterController.createReportVoter);
router.get("/getreportvoter", ReportvoterController.getReportController);

router.post("/getReportsByKaryakarthaId",ReportvoterController.getReportsByKaryakarthaId);
router.delete("/deletereportkaryakartha/:id", ReportvoterController.deleteReportById);

router.post("/postcanvas", CanvasController.createCanvas);
router.get("/getconvas", CanvasController.getCanvas);
router.delete("/deletecanvas/:id", CanvasController.deleteCanvasById);

router.post("/postlocation",locationController.createLocation)
router.get("/getlocation",locationController.getAllLocations)

router.post("/postnotification",notificationController.postNotification)

router.post('/saveotp', otpController.saveOTP);
router.get('/getotp/:phoneNo', otpController.getOTPByPhoneNo);



router.post("/karyakarthasignup", KaryakarthaLoginController.ksignup);
router.post("/karyakarthalogin", KaryakarthaLoginController.klogin);
router.get("/getallkaryakarta", KaryakarthaLoginController.getAll);
router.put("/verify/:_id", KaryakarthaLoginController.verifyKaryakartha);
router.post("/createkaryakartha", KaryakarthaLoginController.kSignupVerified);
router.delete("/deletekaryakarta/:username", KaryakarthaLoginController.deleteUser);
router.patch('/karyakartha/update/:_id', KaryakarthaLoginController.updateKaryakartha);

router.post('/postmessage',messageController.createMessage)
router.get('/getAllMessage',messageController.getAllMessages)
router.get('/getUsername/:username',messageController.getUserNameMessage)

export default router;
