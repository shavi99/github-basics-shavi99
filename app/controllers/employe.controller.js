// Import function from Employe Model
import { getEmploye } from "../models/employe.model.js";
  
// Get All Employes
export const showEmployes = (req, res) => {
    getEmploye((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
