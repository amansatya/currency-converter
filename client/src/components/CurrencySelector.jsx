import React, { useState } from "react";

const CurrencySelector = ({ label, value, onChange, options = {}, loading }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const currencyList = Object.entries(options);

    const filteredCurrencies = currencyList.filter(([code, name]) =>
        (code + " - " + name).toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelect = (code) => {
        onChange(code);
        setSearchTerm(`${code} - ${options[code]}`);
        setIsOpen(false);
    };

    const placeholder = loading ? "Loading currencies..." : "Search or select currency";

    return (
        <div className="flex flex-col w-full relative">
            <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>

            <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                placeholder={placeholder}
                disabled={loading}
                className="p-2 border rounded-lg bg-white shadow-sm disabled:bg-gray-100 disabled:text-gray-400 cursor-text"
            />

            {isOpen && !loading && (
                <ul className="absolute top-full left-0 mt-1 z-10 bg-white border rounded-lg w-full max-h-48 overflow-y-auto shadow-lg">
                    {filteredCurrencies.length > 0 ? (
                        filteredCurrencies.map(([code, name]) => (
                            <li
                                key={code}
                                onClick={() => handleSelect(code)}
                                className={`px-3 py-2 text-left cursor-pointer ${
                                    `${code} - ${name}` === searchTerm
                                        ? "bg-blue-600 text-white"
                                        : "hover:bg-blue-100"
                                }`}
                            >
                                {code} - {name}
                            </li>
                        ))
                    ) : (
                        <li className="px-3 py-2 text-gray-500 text-left">
                            No matches found
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default CurrencySelector;
