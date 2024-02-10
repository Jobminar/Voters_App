import Voters from "../../Model/VotersModel.js"
const SearchController={
    searchBy:async (req, res) => {
        try {
            const { partNo, epicNo, hNo } = req.query;
        
            // Check which field is provided and not empty
            const searchQuery = {};
        
            if (partNo !== undefined && partNo !== '') {
              searchQuery.PART_NO = partNo;
            }
        
            if (epicNo !== undefined && epicNo !== '') {
              searchQuery.EPIC_NO = epicNo;
            }
        
            if (hNo !== undefined && hNo !== '') {
              searchQuery.H_NO = hNo;
            }
        
            const result = await Voters.find(searchQuery);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
      }
}

export default SearchController