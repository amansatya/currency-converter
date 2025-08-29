import React, { useEffect, useState } from "react";
import axios from "axios";

const CurrencySelector = ({ label, value, onChange }) => {
    const [currencies, setCurrencies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/currencies");
                setCurrencies(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch currencies", error);
            }
        };
        fetchCurrencies();
    }, []);

    if (loading) return <p className="text-sm text-gray-500">Loading...</p>;

    return (
        <div className="flex flex-col w-full">
            <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="p-2 border rounded-lg bg-white shadow-sm"
            >
                <option value="">Select currency</option>
                {Object.entries(currencies).map(([code, name]) => (
                    <option key={code} value={code}>
                        {code} - {name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencySelector;
