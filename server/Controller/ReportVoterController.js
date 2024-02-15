import Reportvoters from '../Model/ReportVoterModel.js'


const ReportvoterController = {
  createReportVoter: async (req, res) => {
    try {
      const {
        karyakartha_Id,
        houseNumber,
        pointOfContact,
        numberOfVoters,
        contactDetails,
        comments,
        selectIssue,
      } = req.body;

      const newReport = new Reportvoters({
        karyakartha_Id,
        houseNumber,
        pointOfContact,
        numberOfVoters,
        contactDetails,
        comments,
        selectIssue,
      });

      const savedReport = await newReport.save();

      res.status(201).json(savedReport);
    } catch (error) {
      console.error('Error creating ReportVoter:', error);
      res.status(400).json({ error: 'Failed to create ReportVoter', details: error.message });
    }
  },

  getReportController: async (req, res) => {
    try {
      const allReports = await Reportvoters.find();
      res.status(200).json(allReports);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getReportsByKaryakarthaId: async (req, res) => {
    try {
      const { karyakartha_Id } = req.params;
  
      const reports = await Reportvoters.find({ karyakartha_Id });
  
      if (!reports || reports.length === 0) {
        return res.status(404).json({ message: 'No reports found for the given karyakartha_Id', reports: [] });
      }
  
      res.status(200).json({ message: 'Reports retrieved successfully', reports });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  

  deleteReportById: async (req, res) => {
    try {
      const { id } = req.params;

      const deletedReport = await Reportvoters.findByIdAndDelete(id);

      if (!deletedReport) {
        return res.status(404).json({ error: 'Report not found' });
      }
      res.status(200).json({ message: 'Report deleted successfully', deletedReport });
    } 
    catch (error) {
      console.error('Error deleting Report:', error);
      res.status(500).json({ error: 'Failed to delete Report', details: error.message });
    }
  },
};

export default ReportvoterController;
