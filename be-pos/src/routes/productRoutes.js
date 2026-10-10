import { Router } from "express";
import { getAllProducts } from "../controllers/productController.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getAllProducts);
export default router;