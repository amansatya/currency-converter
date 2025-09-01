import React from "react";

const CurrencySelector = ({ label, value, onChange, options = [] }) => {
    return (
        <div className="flex flex-col w-full">
            <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="p-2 border rounded-lg bg-white shadow-sm"
            >
                <option value="">Select currency</option>
                {options.map(([code, currencyName]) => (
                    <option key={code} value={code}>
                        {code} - {currencyName}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencySelector;
