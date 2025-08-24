import axios from "axios";

export async function fetchCurrencies() {
    try {
        const API_KEY = process.env.CURRENCY_API_KEY;
        const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

        const response = await axios.get(`${BASE_URL}/codes`);
        if (response.data.result !== "success") {
            throw new Error(response.data["error-type"] || "Failed to fetch currencies");
        }

        const codes = response.data.supported_codes;
        const formatted = {};
        codes.forEach(([code, name]) => {
            formatted[code] = name;
        });

        return formatted;
    } catch (error) {
        console.error("Error in fetchCurrencies:", error.response?.data || error.message);
        throw new Error("Failed to fetch currencies");
    }
}

export async function convertCurrency(from, to, amount) {
    try {
        const API_KEY = process.env.CURRENCY_API_KEY;
        const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

        const response = await axios.get(`${BASE_URL}/pair/${from}/${to}/${amount}`);
        if (response.data.result !== "success") {
            throw new Error(response.data["error-type"] || "Failed to convert currency");
        }

        return {
            result: response.data.conversion_result,
            rate: response.data.conversion_rate,
        };
    } catch (error) {
        console.error("Error in convertCurrency:", error.response?.data || error.message);
        throw new Error("Failed to convert currency");
    }
}
