import React, { useState } from "react";
import CurrencySelector from "../components/CurrencySelector";
import AmountInput from "../components/AmountInput";
import ConvertButton from "../components/ConvertButton";
import Loader from "../components/Loader";
import ResultCard from "../components/ResultCard";

const Home = () => {
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleConvert = () => {
        if (!amount) return;
        setLoading(true);
        setTimeout(() => {
            setResult({
                from: fromCurrency,
                to: toCurrency,
                amount,
                converted: (amount * 83.25).toFixed(2),
            });
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="h-screen w-full bg-gradient-to-br from-yellow-300 via-amber-500 to-orange-700 flex items-center justify-center p-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">
                    💸 Currency Converter
                </h1>

                <div className="flex gap-4 mb-4">
                    <CurrencySelector
                        label="From"
                        value={fromCurrency}
                        onChange={setFromCurrency}
                    />
                    <CurrencySelector
                        label="To"
                        value={toCurrency}
                        onChange={setToCurrency}
                    />
                </div>

                <AmountInput value={amount} onChange={setAmount} />
                <ConvertButton onClick={handleConvert} />
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
