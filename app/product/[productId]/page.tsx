import Container from '@/app/components/Container'
import ProductDetails from '@/app/components/singleProducts/ProductDetails'
import { product } from '@/app/utils/product'
import React from 'react'

const Product = () => {
  return (
    <div className='p-8'>
      <Container>
        <ProductDetails product={product}/>
      </Container>
    </div>
  )
}

export default Product
