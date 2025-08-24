import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import currencyRoutes from "./routes/currencyRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Currency Converter Backend Running 🚀");
});

app.use("/api", currencyRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
