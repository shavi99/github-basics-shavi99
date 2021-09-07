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

  // Delete Employes
export const deleteEmploye = (req, res) => {
    const id = req.params.id;
    deleteEmployeById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
} 
