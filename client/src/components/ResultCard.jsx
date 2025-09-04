import React from "react";

const ResultCard = ({ from, to, amount, converted }) => {
    const formattedAmount = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);

    const formattedConverted = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(converted);

    return (
        <div className="mt-6 p-4 bg-green-100 rounded-xl shadow-md text-center">
            <p className="font-bold text-gray-800 text-lg sm:text-xl md:text-2xl">
                {formattedAmount} {from} = {formattedConverted} {to}
            </p>
        </div>
    );
};

export default ResultCard;
