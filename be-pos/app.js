import express from "express";
import cors from "cors";
// import { login } from "./src/controllers/AuthController.js";
import authRoutes from "./src/routes/authRoutes.js"
import userRoutes from "./src/routes/userRoutes.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);



// http://localhost:3000/


// app.post('/api/auth', login);



app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Mobile Legend"
    })
})



export default app;