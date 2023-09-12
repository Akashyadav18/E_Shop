"use client"

import { formatPrice } from '@/app/utils/formatPrice'
import { Rating } from "@mui/material";
import React, { useCallback, useEffect, useState } from 'react'
import SetColor from './SetColor';
import SetQuantity from './SetQuantity';
import SetButton from './SetButton';
import SetImage from './SetImage';
import { useCart } from '@/hooks/UseCart';
import {MdCheckCircle} from "react-icons/md";
import { useRouter } from 'next/navigation';

interface ProductDetailsProps {
    product: any
}

export type CartProductType = {
  id: string,
  name: string,
  description: string,
  price: number
  brand: string,
  category: string,
  quantity: number,
  selectedImg: SelectedImgType,
}

export type SelectedImgType = {
  color: string,
  colorCode: string,
  image: string
}

const Horizontal = () => {
    return <hr className='w-2/3 sm:w-[30%]'/>
}

const ProductDetails = ({product}: ProductDetailsProps) => {

  const router = useRouter();

  const {handleAddProductToCart, cartProducts} = useCart();

  const [isProductInCart, setIsProductInCart] = useState(false);

  const {cartTotalQty} = useCart();
  console.log(cartTotalQty);
  console.log(cartProducts);

  const [cartProduct, setCartProduct] = useState<CartProductType>({
  id: product.id,
  name: product.name,
  description: product.description,
  price: product.price,
  brand: product.brand,
  category: product.category,
  quantity: 1,
  selectedImg: {...product.images[0]},
})

  useEffect(() => {
    setIsProductInCart(false)
    if(cartProducts){
      const existingIndex = cartProducts.findIndex((item) => item.id === product.id)
      if(existingIndex > -1){
        setIsProductInCart(true);
      }
    }
  }, [cartProducts])

    const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

    const handleColorSelect = useCallback((value: SelectedImgType) => {
      setCartProduct((prev) => {
        return {...prev, selectedImg: value}
      })
    }, [cartProduct.selectedImg]);

    const handleQtyIncrease = useCallback(() => {
      setCartProduct((prev) => {
        return {...prev, quantity: ++prev.quantity}
      })
    }, [])

    const handleQtyDecrease = useCallback(() => {
      setCartProduct ((prev) => {
        return {...prev, quantity: cartProduct.quantity > 1 ? --prev.quantity : 1}
      })
    }, [])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
      {/* img */}
      <SetImage cartProduct={cartProduct} product={product} handleColorSelect={handleColorSelect}/>
      {/* text */}
      <div className='flex flex-col items-center md:items-start gap-3'>
        <h1 className='text-xl sm:text-2xl font-bold'>{product.name}</h1>
        <h2 className='text-xl font-semibold'>{formatPrice(product.price)}</h2>
        <div className='flex flex-row gap-4 items-center'>
            <Rating value={productRating} readOnly/>
            <span className='font-semibold'>{product.reviews.length} reviews</span>
        </div>
        <Horizontal/>
        <p className='text-sm'>{product.description}</p>
        <Horizontal/>
        <div>
            <span className='font-semibold uppercase'>Category :</span>
            <span>phone</span>
        </div>
       
        <div>
            <span className='font-semibold uppercase'>Brand :</span>
            <span>Apple</span>
        </div>
        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>{product.inStock ? "In Stock" : "Out of Stock"}</div>
        <Horizontal/>
        {isProductInCart ? 
          <>
            <p className='mb-2 text-slate-500 flex items-center gap-1'>
              <MdCheckCircle className='text-teal-400' size={20}/>
              <span>Product added to Cart</span>
            </p>
            <div className='w-full sm:w-1/2 text-center p-2 rounded-md text-lg md:font-semibold border-2 bg-slate-700 text-white hover:bg-white hover:text-slate-700'>
              <button onClick={() => {router.push('/cart')}}>View Cart</button>
            </div>
          </> 
          : 
          <>
            <SetColor images={product.images} cartProduct={cartProduct} handleColorSet={handleColorSelect}/>
            <Horizontal/>
            <SetQuantity cartProduct={cartProduct} handleQtyIncrease={handleQtyIncrease} handleQtyDecrease={handleQtyDecrease}/>
            <Horizontal/>
            <SetButton onClick={() => handleAddProductToCart(cartProduct)}/>
          </>
        }

      </div>
    </div>
  )
}

export default ProductDetails
