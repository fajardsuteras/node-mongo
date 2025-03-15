import express from "express"; 
import {flowerController} from "../controllers/flower.controller"; 

const router = express.Router(); 

router.get("/flower", flowerController.list); 

export default router; 
