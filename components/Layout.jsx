import React from "react";
import Link from "next/link";

import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Head>
                <title>Techshopy</title>
                <meta name="description" content="Buy your favorites technologies with the best price of the market inside the Techshopy." />
            </Head>
            <header>
                <Navbar />
            </header>
            <main className="main-container">
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}