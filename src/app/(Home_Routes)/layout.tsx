'use client'
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import i18n from "@/src/utils/i18n";
import React, { ReactNode, useState } from "react";
import { I18nextProvider } from "react-i18next";

interface Props {
    children: ReactNode;
}
export default function HomeRoutes({ children }: Props) {

    const [IsAllowed, setIsAllowed] = useState<boolean | null>(null);
    const [IsShowed, setIsShowed] = useState<boolean>(true);

    return (
        <>

            {
                IsShowed && <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
                        {/* Icon (Optional) */}
                        <div className="mb-3">
                            <span className="text-4xl">🍾</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-bold mb-2">Age Confirmation!</h2>

                        {/* Message */}
                        <p className="text-gray-600 mb-4">
                            Welcome! Before you enter, please confirm your age. You must be 18 or older to access this site.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col gap-3">
                            <button
                                className="bg-blue-700 text-white py-2 rounded-lg text-lg hover:bg-blue-800"
                                onClick={() => { setIsAllowed(true); setIsShowed(false) }}
                            >
                                Yes, I am 18+
                            </button>
                            <button
                                className="bg-blue-700 text-white py-2 rounded-lg text-lg hover:bg-blue-800"
                                onClick={() => { setIsAllowed(false); setIsShowed(false) }}
                            >
                                No, Take Me Back
                            </button>
                        </div>
                    </div>
                </div>
            }
            {/* Conditional Rendering of Content */}
            {IsAllowed === true ? (
                <I18nextProvider i18n={i18n}>
                    <Navbar />
                    {children}
                    <Footer />
                </I18nextProvider>
            ) : IsAllowed === false ? (
                <p className="text-center text-2xl text-white mt-20 px-10">
                    Sorry, you cannot access our page Due to Age Confirmation.
                </p>
            ) : null}
        </>
    );
}
