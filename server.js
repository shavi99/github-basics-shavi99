
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Router from "./app/routes/employe.routes.js";
  

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router);
  
app.listen(8080, () => console.log('Server running at http://localhost:8080'))