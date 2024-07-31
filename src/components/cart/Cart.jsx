import {createContext, useState} from "react";

const CartContext = createContext();

export const Cart = ({children}) => {
  const [cartItems, setCartItems] = useState(0);

  return <CartContext.Provider value={{cartItems, setCartItems}}>{children}</CartContext.Provider>;
};

export default Cart;
