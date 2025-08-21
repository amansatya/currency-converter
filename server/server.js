import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Currency Converter Backend Running 🚀");
});

app.get("/api/test-env", (req, res) => {
    res.json({
        message: "Env test successful ✅",
        port: process.env.PORT,
        testKey: process.env.TEST_KEY,
        currencyKey: process.env.CURRENCY_API_KEY ? "Key Loaded" : "Missing Key"
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
