import React from "react";

const Loader = () => {
    return (
        <div className="flex justify-center items-center mt-4">
            <div className="w-6 h-6 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader;
