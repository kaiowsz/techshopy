import React, { useContext } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai"

import Cart from "./Cart";
import { Context } from "../context/StateContext";

export default function Navbar() {

    const StateContext = useContext(Context)
    const { showCart, setShowCart, totalQuantities } = StateContext

    return (
        <div className="navbar-container">
            <p className="logo">
                <Link href="/">Kaiowsz Headphones</Link>
            </p>

            <button type="button" 
            className="cart-icon"
            onClick={() => setShowCart(!showCart)}>
                <AiOutlineShopping />
                <span className="cart-item-qty">{totalQuantities}</span>
            </button>

            {showCart && <Cart />}
        </div>
    )
}