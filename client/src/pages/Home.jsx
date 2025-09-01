import React, { useState, useEffect } from "react";
import CurrencySelector from "../components/CurrencySelector";
import AmountInput from "../components/AmountInput";
import ConvertButton from "../components/ConvertButton";
import Loader from "../components/Loader";
import ResultCard from "../components/ResultCard";
import { getCurrencies, convertCurrency } from "../utils/api";

const Home = () => {
    const [currencies, setCurrencies] = useState({});
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [currencyLoading, setCurrencyLoading] = useState(true);

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const data = await getCurrencies();
                setCurrencies(Object.entries(data));
                setCurrencyLoading(false);
            } catch (err) {
                setError("Failed to load currencies. Please try again.");
                setCurrencyLoading(false);
            }
        };
        fetchCurrencies();
    }, []);

    const handleConvert = async () => {
        if (!amount || !fromCurrency || !toCurrency) return;
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const converted = await convertCurrency(fromCurrency, toCurrency, amount);
            setResult({
                from: fromCurrency,
                to: toCurrency,
                amount,
                converted,
            });
        } catch (err) {
            setError("Conversion failed. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen w-full bg-gradient-to-br from-yellow-300 via-amber-500 to-orange-700 flex items-center justify-center p-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">
                    💸 Currency Converter
                </h1>

                {currencyLoading ? (
                    <p className="text-sm text-gray-500">Loading currencies...</p>
                ) : error ? (
                    <p className="text-sm text-red-500">{error}</p>
                ) : (
                    <div className="flex flex-col gap-4 mb-4">
                        <CurrencySelector
                            label="From"
                            value={fromCurrency}
                            onChange={setFromCurrency}
                            options={currencies}
                        />
                        <CurrencySelector
                            label="To"
                            value={toCurrency}
                            onChange={setToCurrency}
                            options={currencies}
                        />
                    </div>
                )}

                <AmountInput value={amount} onChange={setAmount} />
                <ConvertButton onClick={handleConvert} disabled={!amount || loading} />

                {loading && <Loader />}
                {result && !loading && (
                    <ResultCard
                        from={result.from}
                        to={result.to}
                        amount={result.amount}
                        converted={result.converted}
                    />
                )}
            </div>
        </div>
    );
};

export default Home;
