import Container from '@/app/components/Container'
import ListRating from '@/app/components/singleProducts/ListRating'
import ProductDetails from '@/app/components/singleProducts/ProductDetails'
import { product } from '@/app/utils/product'
import React from 'react'

const Product = () => {
  return (
    <div className='p-8'>
      <Container>
        <ProductDetails product={product}/>
        <div className='flex flex-col mt-20 gap-4'>
          <div>Add Rating</div>
          <ListRating product={product}/>
        </div>
      </Container>
    </div>
  )
}

export default Product
