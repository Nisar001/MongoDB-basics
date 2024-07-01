import Airbnb from "../models/AirbnbModels.js";

export const getProperty_type = async(req, res) => {
   try {
      const aggregationPipeline = [
      {
         $group: { 
            _id: '$property_type', 
            total: { $count: {} } 
         }
      }
   ]
  const response = await Airbnb.aggregate(aggregationPipeline)
  return res.status(200).json({ ...response })
   } catch (error) {
      console.log(error)
      res.status(500).send({
         success: false,
         message: error
      })
   }
}

export const searchByname = async (req, res) => {
   try {
      const {letters} = req.params;
      if(!letters){
         res.status(400).send({
            message: "Parameter Letters is required"
         })
      }
      const regex = new RegExp(letters, 'i'); 
        const aggregationPipeline = [
            {
               $match: {
                  name: { $regex: regex }
               }
            }
        ];

        const result = await Airbnb.aggregate(aggregationPipeline);
        res.status(200).json({...result});
    } 
    catch (error) {
      console.log(error)
      res.status(500).json({message: error.message})
   }
}