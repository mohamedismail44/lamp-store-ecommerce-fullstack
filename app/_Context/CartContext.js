'use client'
import { createContext, useState } from "react"


export const carts = createContext(null)
export default function CartContext(props) {
    
  const [Cart, setCart] = useState([])

  return (
    <carts.Provider value={{Cart,setCart}}>
{props.children}
    </carts.Provider>
    
  )
}
