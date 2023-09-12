import { CartContextProvider } from '@/hooks/UseCart'
import React from 'react'

interface CartProviderProps {
    children: React.ReactNode
}

const CartProvider = ({children}: CartProviderProps) => {
  return (
    <div>
      <CartContextProvider>
        {children}
      </CartContextProvider>
    </div>
  )
}

export default CartProvider
