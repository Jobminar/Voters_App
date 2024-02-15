import multer from "multer";
import ReportIncident from '../Model/ReportIncidentModel.js';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const ReportIncidentController = {

  createReportIncident: [
    upload.single('image'),
    async (req, res) => {
      try {
        const { karyakartha_Id, incident, message } = req.body;

        if (!req.file || !karyakartha_Id || !incident || !message) {
          return res.status(400).json({ error: 'Image file, karyakartha_Id, incident, and message are required' });
        }

        const image = req.file.buffer.toString('base64');

        const newReport = new ReportIncident({
          karyakartha_Id,
          incident,
          message,
          image,
        });

        const savedReport = await newReport.save();

        res.status(201).json(savedReport);
      } catch (error) {
        console.error('Error creating ReportIncident:', error);
        res.status(400).json({ error: 'Failed to create ReportIncident', details: error.message });
      }
    }
  ],

  getReportIncident: async (req, res) => {
    try {
      const allReports = await ReportIncident.find();
      res.status(200).json(allReports);
    } catch (error) {
      console.error('Error fetching all reports:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getReportsIncidentByKaryakarthaId: async (req, res) => {
    try {
      const { karyakartha_Id } = req.params;

      if (!karyakartha_Id) {
        return res.status(400).json({ error: 'karyakartha_Id parameter is required' });
      }

      const reports = await ReportIncident.find({ karyakartha_Id });

      if (!reports || reports.length === 0) {
        return res.status(404).json({ message: 'No reports found for the given karyakartha_Id', reports: [] });
      }

      res.status(200).json({ message: 'Reports retrieved successfully', reports });
    } catch (error) {
      console.error('Error fetching reports by karyakartha_Id:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

export default ReportIncidentController;
