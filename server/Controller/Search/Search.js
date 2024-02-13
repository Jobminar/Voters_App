
import Voters from "../../Model/VotersModel.js";

const SearchController = {
  searchByHouse: async (req, res) => {
    try {
      const { hNo, epicNo,partno } = req.query;
      if ((!hNo && !epicNo && !partno) || (hNo === '' && epicNo === '' && partno==='')) {
        return res.status(400).json({ error: 'House number or Part number or EPIC number is required' });
      }

      let query = {};
      if (hNo) {
        query.H_NO = hNo;
      }
      if (epicNo) {
        query.EPIC_NO = epicNo;
      }
      if (partno) {
        query.PART_NO = partno;
      }

      const result = await Voters.find(query);
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

export default SearchController;



