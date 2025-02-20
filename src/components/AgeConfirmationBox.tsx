'use client';
import React, { useEffect, useState } from 'react';
import { FaWineBottle } from 'react-icons/fa';

const AgeConfirmationBox = () => {
    const [isAllowed, setIsAllowed] = useState<boolean | null>(null);
    const [isShowed, setIsShowed] = useState<boolean>(false);

    useEffect(() => {

        const IsInLocal = sessionStorage.getItem("BoxModel");
        if (!IsInLocal) {
            setIsShowed(true);
            document.body.classList.add("overflow-hidden");
        }

    }, []);

    useEffect(() => {

        if (isAllowed === false) {
            window.history.back();
        }

        else if (isAllowed === true) {
            setIsShowed(false)
            document.body.classList.remove("overflow-hidden");
            sessionStorage.setItem("BoxModel", "false")
        }

    }, [isAllowed])



    return (
        <div>
            {isShowed && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 w-screen h-screen">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
                        <div className="mb-3 w-full flex items-center justify-center">
                            <FaWineBottle className='text-4xl' />
                        </div>
                        <h2 className="text-xl font-bold mb-2">Age Confirmation!</h2>
                        <p className="text-gray-600 mb-4">Welcome! Before you enter, please confirm your age. You must be <span className='text-lg font-bold text-black'>18 or older</span> to access this site</p>
                        <div className="flex flex-col gap-3">
                            <button
                                className="bg-blue-700 text-white py-2 rounded-lg text-lg hover:bg-blue-800"
                                onClick={() => setIsAllowed(true)}
                            >
                                Yes, I am 18+
                            </button>
                            <button
                                className="bg-[#E92029] text-white py-2 rounded-lg text-lg hover:bg-[#c22c33]"
                                onClick={() => setIsAllowed(false)}
                            >
                                No, Take Me Back
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AgeConfirmationBox;