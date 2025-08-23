import express from "express";
import { fetchCurrencies, convertCurrency } from "../utils/currencyAPI.js";

const router = express.Router();

router.get("/currencies", async (req, res) => {
    try {
        const currencies = await fetchCurrencies(); // utility function
        res.json(currencies);
    } catch (err) {
        console.error("Error fetching currencies:", err.message);
        res.status(500).json({ error: "Failed to fetch currencies" });
    }
});

router.post("/convert", async (req, res) => {
    try {
        const { from, to, amount } = req.body;

        // Basic validation
        if (!from || !to || !amount) {
            return res.status(400).json({ error: "Please provide from, to, and amount" });
        }

        const convertedAmount = await convertCurrency(from, to, amount);
        res.json({ result: convertedAmount });
    } catch (err) {
        console.error("Error converting currency:", err.message);
        res.status(500).json({ error: "Failed to convert currency" });
    }
});

export default router;