import { Link } from "react-router-dom";
import React from "react";

const Checkout = () => {
    return (
        <div className="bg-gray-100 h-screen">
            <div className="bg-white p-6 md:mx-auto">
                <div className="flex items-center justify-center bg-green-600 w-16 h-16 mx-auto my-6 rounded-full">
                    <svg viewBox="0 0 24 24" className="w-22 h-17 text-white">
                        <path fill="currentColor" d="M9 16.2l-3.2-3.2L5.3 11l3.7 3.7 7.7-7.7L18 9z" />
                    </svg>
                </div>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                        Payment Done!
                    </h3>
                    <p className="text-gray-600 my-2">
                        Thank you for completing your secure online payment 🙏
                    </p>
                    <p>Have a great day🎉</p>
                    <div className="py-10 text-center">
                        <Link to="/home" className="px-12 bg-buttonBgColor text-white font-semibold py-3">
                            Go Back To Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
