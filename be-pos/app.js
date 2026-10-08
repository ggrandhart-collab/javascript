import express from "express";
import cors from "cors";
import { login } from "./src/controllers/AuthController.js";
import authRoutes from "./src/routes/auth.route.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

// http://localhost:3000/


app.post('/api/auth', login);



app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Mobile Legend"
    })
})



export default app;