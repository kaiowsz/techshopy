import React, {useState, useEffect, useContext} from "react"
import Link from "next/link"
import { BsBagCheckFill } from "react-icons/bs"
import { useRouter } from "next/router"
import { Context } from "../context/StateContext"
import runFireworks from "../lib/utils"


export default function Success() {
    
    const StateContext = useContext(Context)

    const { setCartItems, setTotalPrice, setTotalQuantities } = StateContext

    useEffect(() => {
        localStorage.clear();
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
        runFireworks()
    }, [])
    
    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill/>
                </p>
                <h2>Thank you for your order!</h2>
                <p className="email-msg">Check your email inbox for the receipt.</p>
                <p className="description">If you have any questions, please email:
                    <a className="email" href="mailto:speexy10@gmail.com">
                        speexy10@gmail.com
                    </a>
                </p>
                <Link href="/">
                    <button className="btn" width="300px" type="button">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}