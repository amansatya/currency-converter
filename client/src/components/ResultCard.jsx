import React from "react";

const ResultCard = ({ from, to, amount, converted }) => {
    if (!converted) return null;

    return (
        <div className="mt-4 p-4 rounded-xl bg-green-50 shadow-lg text-center">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                {amount} {from} = {converted.toLocaleString()} {to}
            </p>
        </div>
    );
};
export default ResultCard;
