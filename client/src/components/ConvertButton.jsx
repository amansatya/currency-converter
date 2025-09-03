import React from "react";

const ConvertButton = ({ onClick, disabled, loading }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={`mt-3 w-full py-2 px-4 rounded-lg font-semibold shadow-md transition 
        ${disabled || loading
                ? "bg-gray-300 cursor-not-allowed text-gray-600"
                : "bg-blue-500 hover:bg-blue-600 text-white"}`}
        >
            {loading ? "Converting..." : "Convert"}
        </button>
    );
};

export default ConvertButton;
