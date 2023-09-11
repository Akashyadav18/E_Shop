import React from 'react'
import { CartProductType, SelectedImgType } from './ProductDetails';

interface setColorProps {
    images: SelectedImgType[];
    cartProduct: CartProductType;
    handleColorSet: (value: SelectedImgType) => void;
}

const SetColor = ({images, cartProduct, handleColorSet}: setColorProps) => {
  return (
    <div className='flex gap-4 items-center'>
      <span className='font-semibold uppercase'>Color :</span>
      <div className='flex items-center gap-2'>
        {images.map((image) => (
            // ring
            <div key={image.color} onClick={() => handleColorSet(image)}
             className={`w-7 h-7 rounded-full border-teal-300 flex items-center justify-center 
            ${cartProduct.selectedImg.color === image.color ? "border-[2px]" : "border-none"}`}>
                {/* color */}
                <div style={{background: image.colorCode}} className='h-5 w-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer'></div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default SetColor
