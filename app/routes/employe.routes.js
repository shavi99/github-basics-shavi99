// import express
import express from "express";
  
// import function from controller
import { showEmploye } from "../controllers/employe.controller.js";
  
// init express router
const router = express.Router();

router.get('/', showEmploye);

// Get All Employe
router.get('/employes', showEmploye);
  
  
// export default router
export default router;