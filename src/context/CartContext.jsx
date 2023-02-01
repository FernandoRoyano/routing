import { createContext, useState } from "react";

const CartContext = createContext()

const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [shipping, setShipping] = useState(0)

    return (
        <CartContext.Provider value={{cart, setCart, shipping, setShipping}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, ContextProvider}