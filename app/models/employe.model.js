// import connection
import db from "../config/db.config.js";
  
// Get All Employes
export const getEmploye = (result) => {
    db.query("SELECT * FROM employe", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
// Delete Employe to Database
export const deleteEmployeById = (id, result) => {
    db.query("DELETE FROM employe WHERE employe_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}