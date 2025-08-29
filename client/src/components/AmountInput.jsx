import React from "react";

const AmountInput = ({ value, onChange }) => {
    const handleChange = (e) => {
        const val = e.target.value;
        if (val >= 0 || val === "") {
            onChange(val);
        }
    };

    return (
        <div className="flex flex-col w-full">
            <label className="h-5 mb-2 text-sm font-bold text-gray-700">Amount</label>
            <input
                type="number"
                min="0"
                value={value}
                onChange={handleChange}
                placeholder="Enter amount"
                className="p-2 border rounded-lg shadow-sm"
            />
        </div>
    );
};

export default AmountInput;
