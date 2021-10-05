// Import function from Employe Model
import { getEmploye, deleteEmployeById, insertEmploye } from "../models/employe.model.js";
  
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

// Delete Employe
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

// Create New Employe
export const createEmploye = (req, res) => {
    const data = req.body;
    insertEmploye(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}