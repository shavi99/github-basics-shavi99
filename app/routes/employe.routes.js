// import express
import express from "express";
  
// import function from controller
import { showEmployes, deleteEmploye, createEmploye } from "../controllers/employe.controller.js";
  
// init express router
const router = express.Router();

router.get('/', showEmployes);

// Get All Employe
router.get('/employes', showEmployes);

// Delete Employe
router.delete('/employes/:id', deleteEmploye);
  
// Create New Employe
router.post('/employes', createEmploye);
  
// export default router
export default router;


  