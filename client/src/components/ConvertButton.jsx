import React from "react";

const ConvertButton = ({ onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`mt-3 w-full py-2 px-4 rounded-lg font-semibold shadow-md transition 
        ${disabled ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
        >
            Convert
        </button>
    );
};

export default ConvertButton;
