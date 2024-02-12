// // SearchController.js

// import Voters from "../../Model/VotersModel.js";

// const SearchController = {
//   searchByHouse: async (req, res) => {
//     try {
//       const { hNo } = req.query;

//       // Check if house number is provided and not empty
//       if (hNo === undefined || hNo === '') {
//         return res.status(400).json({ error: 'House number is required' });
//       }

//       const result = await Voters.find({ H_NO: hNo });
//       res.json(result);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   }
// };

// export default SearchController;

// SearchController.js

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



// import Voters from "../../Model/VotersModel.js"
// const SearchController={

//   searchBy: async (req, res) => {
//     try {
//       const { hNo } = req.query;

//       // Check if house number is provided and not empty
//       if (hNo === undefined || hNo === '') {
//         return res.status(400).json({ error: 'House number is required' });
//       }

//       const result = await Voters.find({ H_NO: hNo });
//       res.json(result);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   }
// }

// export default SearchController
//   //   searchBy:async (req, res) => {
//   //       try {
//   //           const { partNo, epicNo, hNo } = req.query;
        
//   //           // Check which field is provided and not empty
//   //           const searchQuery = {};
        
//   //           if (partNo !== undefined && partNo !== '') {
//   //             searchQuery.PART_NO = partNo;
//   //           }
        
//   //           if (epicNo !== undefined && epicNo !== '') {
//   //             searchQuery.EPIC_NO = epicNo;
//   //           }
        
//   //           if (hNo !== undefined && hNo !== '') {
//   //             searchQuery.H_NO = hNo;
//   //           }
        
//   //           const result = await Voters.find(searchQuery);
//   //   res.json(result);
//   // } catch (error) {
//   //   console.error(error);
//   //   res.status(500).json({ error: 'Internal Server Error' });
//   // }
//   //     }
// // }

// // export default SearchController