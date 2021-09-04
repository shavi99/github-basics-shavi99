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
  
