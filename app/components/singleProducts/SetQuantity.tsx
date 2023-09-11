import React from 'react'
import { CartProductType } from './ProductDetails'

interface SetQtyProps {
    cartCounter?: boolean,
    cartProduct: CartProductType,
    handleQtyIncrease: () => void,
    handleQtyDecrease: () => void
}

const btnStyle = "border-[1.5px] border-slate-400 px-2 rounded text-lg font-semibold";

const SetQuantity = ({cartCounter, cartProduct, handleQtyIncrease, handleQtyDecrease}: SetQtyProps) => {
  return (
    <div className='flex gap-4 items-center'>
      {cartCounter ? null : <div className='font-semibold uppercase'>Quantity :</div>}
      <div className='flex gap-2 md:gap-4 items-center text-base'>
        <button onClick={handleQtyDecrease} className={btnStyle}>-</button>
        <div className='font-semibold'>{cartProduct.quantity}</div>
        <button onClick={handleQtyIncrease} className={btnStyle}>+</button>
      </div>
    </div>
  )
}

export default SetQuantity
