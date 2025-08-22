import axios from "axios";

export async function fetchCurrencies() {
    try {
        const API_KEY = process.env.CURRENCY_API_KEY;
        const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

        const response = await axios.get(`${BASE_URL}/codes`);
        return response.data;
    } catch (error) {
        console.error("Error in fetchCurrencies:", error.response?.data || error.message);
        throw error;
    }
}

export async function convertCurrency(from, to, amount) {
    try {
        const API_KEY = process.env.CURRENCY_API_KEY;
        const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

        const response = await axios.get(`${BASE_URL}/pair/${from}/${to}/${amount}`);
        return response.data.conversion_result;
    } catch (error) {
        console.error("Error in convertCurrency:", error.response?.data || error.message);
        throw error;
    }
}
