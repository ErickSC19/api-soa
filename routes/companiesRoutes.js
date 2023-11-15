import { Router } from "express";
import { getCompanies } from "../controllers/companiesController.js";

const router = Router();


router.get("/", getCompanies);



export default router;