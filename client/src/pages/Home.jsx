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

    const [currencyLoading, setCurrencyLoading] = useState(true);
    const [currencyError, setCurrencyError] = useState(null);

    const [conversionLoading, setConversionLoading] = useState(false);
    const [conversionError, setConversionError] = useState(null);
    const [result, setResult] = useState(null);

    useEffect(() => {
        const fetchCurrencies = async () => {
            setCurrencyLoading(true);
            try {
                const data = await getCurrencies();
                setCurrencies(data);
            } catch (err) {
                setCurrencyError("⚠️ Failed to load currencies. Please try again.");
            } finally {
                setCurrencyLoading(false);
            }
        };
        fetchCurrencies();
    }, []);

    const handleConvert = async () => {
        if (!amount || !fromCurrency || !toCurrency) return;

        setConversionLoading(true);
        setConversionError(null);
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
            setConversionError("⚠️ Conversion failed. Please try again later.");
        } finally {
            setConversionLoading(false);
        }
    };

    return (
        <div className="h-screen w-full bg-gradient-to-br from-yellow-300 via-amber-500 to-orange-700 flex items-center justify-center p-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">
                    💸 Currency Converter
                </h1>

                {currencyLoading ? (
                    <div className="flex justify-center my-4">
                        <Loader />
                    </div>
                ) : currencyError ? (
                    <p className="text-sm text-red-500">{currencyError}</p>
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

                <ConvertButton
                    onClick={handleConvert}
                    disabled={
                        !amount || !fromCurrency || !toCurrency || conversionLoading
                    }
                    loading={conversionLoading}
                />

                {conversionLoading && (
                    <div className="flex justify-center mt-4">
                        <Loader />
                    </div>
                )}

                {conversionError && (
                    <p className="text-sm text-red-500 mt-2">{conversionError}</p>
                )}

                {result && !conversionLoading && (
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
