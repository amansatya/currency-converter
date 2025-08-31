import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
});

export const getCurrencies = async () => {
    try {
        const response = await api.get("/currencies");
        return response.data; // expected: array of currency codes
    } catch (error) {
        console.error("Error fetching currencies:", error.message);
        throw new Error(
            error.response?.data?.message ||
            "Unable to load currencies. Please try again later."
        );
    }
};

export const convertCurrency = async (from, to, amount) => {
    try {
        const response = await api.post("/convert", { from, to, amount });
        return response.data; // expected: { result: number, from, to }
    } catch (error) {
        console.error("Error converting currency:", error.message);
        throw new Error(
            error.response?.data?.message ||
            "Conversion failed. Please try again later."
        );
    }
};

export default api;
