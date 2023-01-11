import React, { createContext, useState } from "react";

import { toast } from "react-hot-toast";

export const Context = createContext()

export function StateContext({children}) {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities ] = useState(0)
    const [qty, setQty] = useState(1)

    let foundProduct;
    let index;

   

    function onAdd(product, quantity) {
        const checkProductInCart = cartItems.find((item) => item._id === product._id)
        setTotalPrice((prevPrice) => prevPrice + product.price * quantity)
        setTotalQuantities((prevQuant) => prevQuant + quantity)

        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

            setCartItems(updatedCartItems)
        } else {
            product.quantity = quantity

            setCartItems([...cartItems, {...product}])

        }
        toast.success(`${qty} ${product.name} added to the cart!`);
    }


    function onRemove(product) {
        foundProduct = cartItems.find((item) => item._id === product._id)
        const newCartItems = cartItems.filter((item) => item._id !== product._id);

        setTotalPrice(prevTotal => prevTotal - foundProduct.price * foundProduct.quantity)
        setTotalQuantities(prevQuant => prevQuant - foundProduct.quantity)
        setCartItems(newCartItems)
    }



    // add or remove more items within cart.


     function toggleCartItemQuantity(id, value) {
        foundProduct = cartItems.find((item) => item._id === id)
        index = cartItems.findIndex((product) => product._id === id)

        /* firstly, the product is found.

        after, verify if the user is trying to increment one more product or remove. */

        if (value === "inc") {

            let newCartItems = cartItems.map(item => {
                if(item._id === id) {
                    return { ...item,
                    quantity: item.quantity += 1 }
                }
                return item
            })

            setCartItems(newCartItems)

            setTotalPrice((prevPrice) => prevPrice + foundProduct.price)
            setTotalQuantities((prevQuant) => prevQuant + 1)


        } else if (value === "dec") {
            if(foundProduct.quantity > 1) {

                let newCartItems = cartItems.map(item => {
                    if(item._id === id) {
                        return { ...item,
                        quantity: item.quantity -= 1 }
                    }
                    return item
                })

                setCartItems(newCartItems)


                setTotalPrice((prevPrice) => prevPrice - foundProduct.price)
                setTotalQuantities(prevQuant => prevQuant - 1)
            }
            
        }
    }



    function increaseQty() {
        setQty((prev) => prev + 1)
    }

    function decreaseQty() {
        setQty((prevQty) => {
          if(prevQty - 1 < 1) return 1;
         
          return prevQty - 1;
        });
    }
    
    return (
    <Context.Provider value={ 
        {showCart, setShowCart,
        cartItems, setCartItems,
        totalPrice, setTotalPrice,
        totalQuantities, setTotalQuantities,
        qty, increaseQty, decreaseQty, onAdd, toggleCartItemQuantity, onRemove} }>
        {children}
    </Context.Provider>
    )
}