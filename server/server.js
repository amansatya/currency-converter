import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { fetchCurrencies, convertCurrency } from "./utils/currencyAPI.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Currency Converter Backend Running 🚀");
});

app.get("/api/currencies", async (req, res) => {
    try {
        const currencies = await fetchCurrencies();
        res.json(currencies);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch currencies" });
    }
});

app.post("/api/convert", async (req, res) => {
    const { from, to, amount } = req.body;

    if (!from || !to || !amount) {
        return res.status(400).json({ error: "from, to, and amount are required" });
    }

    try {
        const result = await convertCurrency(from, to, amount);
        res.json({ from, to, amount, result });
    } catch (error) {
        res.status(500).json({ error: "Failed to convert currency" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
