import React from "react";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header.component";
type Props = {
    children: React.ReactElement
}

export default function MainLayout({ children }: Props) {

    return <>
        <Header />
        {children}
        <Footer />
    </>
}