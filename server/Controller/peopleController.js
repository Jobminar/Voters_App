import People from "../Model/peoplesModel.js";

const peopleController = {
   
  createPeople: async (req, res) => {
    try {
        const { 
            EPIC_NUMBER,
            SNO,
            PARTNO,
            PARTY,
            SUB_CASTE,
            GENDER,
            AGE,
            RELATION,
            ST,
            VOTER_NAME,
            SURNAME,
            GAURDIEN,
            VSNO,
            VillAGE,
            SNOP,
            H_NO,
            R_TYPE
        } = req.body;

        // Create new People record
        const newPeople = await People.create({ 
            EPIC_NUMBER,
            SNO,
            PARTNO,
            PARTY,
            SUB_CASTE,
            GENDER,
            AGE,
            RELATION,
            ST,
            VOTER_NAME,
            SURNAME,
            GAURDIEN,
            VSNO,
            VillAGE,
            SNOP,
            H_NO,
            R_TYPE
        });

        res.status(201).json({ success: true, data: newPeople });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
},
  
    getAllPeople: async (req, res) => {
        try {
            const allPeople = await People.find();
            res.status(200).json({ success: true, data: allPeople });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },
   
    getPeopleById: async (req, res) => {
      try {
          const { id } = req.params;
          const people = await People.findOne({$or: [{ EPIC_NUMBER: id }, { H_NO: id }, { VOTER_NAME: id }]});
  
          if (!people) {
              return res.status(404).json({ error: "Person not found" });
          }
  
          res.status(200).json({ success: true, data: people });
      } catch (error) {
          console.error(error);
          res.status(500).json({ success: false, error: "Internal Server Error" });
      }
  },

};

export default peopleController;
