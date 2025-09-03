import React from "react";

const CurrencySelector = ({ label, value, onChange, options = {}, loading }) => {
    return (
        <div className="flex flex-col w-full">
            <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={loading}
                className="p-2 border rounded-lg bg-white shadow-sm disabled:bg-gray-100 disabled:text-gray-400"
            >
                <option value="">
                    {loading ? "Loading currencies..." : "Select currency"}
                </option>
                {!loading &&
                    Object.entries(options).map(([code, currencyName]) => (
                        <option key={code} value={code}>
                            {code} - {currencyName}
                        </option>
                    ))}
            </select>
        </div>
    );
};

export default CurrencySelector;
