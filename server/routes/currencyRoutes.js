import express from "express";
import { fetchCurrencies, convertCurrency } from "../utils/currencyAPI.js";

const router = express.Router();

router.get("/currencies", async (req, res) => {
    try {
        const currencies = await fetchCurrencies();
        if (!currencies) {
            return res.status(500).json({ error: "Failed to fetch currencies" });
        }
        res.json(currencies);
    } catch (error) {
        console.error("Error fetching currencies:", error.message);
        res.status(500).json({ error: "Something went wrong while fetching currencies" });
    }
});

router.post("/convert", async (req, res) => {
    try {
        const { from, to, amount } = req.body;

        if (!from || !to || !amount) {
            return res.status(400).json({ error: "Missing required fields: from, to, amount" });
        }
        if (typeof from !== "string" || typeof to !== "string") {
            return res.status(400).json({ error: "Currency codes must be strings" });
        }
        if (isNaN(amount) || amount <= 0) {
            return res.status(400).json({ error: "Amount must be a positive number" });
        }

        const result = await convertCurrency(from, to, amount);

        if (!result || result.error) {
            return res.status(500).json({ error: "Conversion failed, please try again later." });
        }

        res.json(result);
    } catch (error) {
        console.error("Error in conversion:", error.message);

        if (error.response?.status === 429) {
            return res.status(429).json({ error: "API limit exceeded, please try again later." });
        }

        res.status(500).json({ error: "Network error. Please try again later." });
    }
});

export default router;
