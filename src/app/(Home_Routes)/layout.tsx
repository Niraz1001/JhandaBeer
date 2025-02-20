'use client'
import AgeConfirmationBox from "@/src/components/AgeConfirmationBox";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import i18n from "@/src/utils/i18n";
import React, { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";

interface Props {
    children: ReactNode;
}
export default function HomeRoutes({ children }: Props) {

    return (
        <>

            <I18nextProvider i18n={i18n}>
                <Navbar />
                {children}
                <Footer />
            </I18nextProvider>
            <AgeConfirmationBox />

        </>
    );
}
