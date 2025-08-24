import express from "express";
import { fetchCurrencies, convertCurrency } from "../utils/currencyAPI.js";

const router = express.Router();

router.get("/currencies", async (req, res) => {
    try {
        const data = await fetchCurrencies();
        res.json(data);
    } catch (err) {
        console.error("Error fetching currencies:", err.message);
        res.status(500).json({ error: "Failed to fetch currencies" });
    }
});

router.post("/convert", async (req, res) => {
    try {
        const { from, to, amount } = req.body;

        if (!from || !to || !amount || isNaN(amount)) {
            return res.status(400).json({ error: "Please provide valid from, to, and numeric amount" });
        }

        const result = await convertCurrency(from, to, amount);

        if (!result) {
            return res.status(500).json({ error: "Conversion failed" });
        }

        res.json({ result });
    } catch (err) {
        console.error("Error converting currency:", err.message);
        res.status(500).json({ error: "Failed to convert currency" });
    }
});

export default router;
