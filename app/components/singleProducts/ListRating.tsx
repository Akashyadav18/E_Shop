import React from 'react'
import Heading from './Heading';
import moment from 'moment';
import { Rating } from '@mui/material';
import Avatar from './Avatar';

interface ListRatingProps {
    product: any;
}

const ListRating = ({product}: ListRatingProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <Heading title="product Review"/>
      {product.reviews && product.reviews.map((review: any) => (
        <div key={review.id} className='max-w-300px'>
            <div className='flex gap-2 items-center'>
               <Avatar src={review?.user.image}/>
                <div className='font-semibold'>{review?.user.name}</div>
                <div className='font-light'>{moment(review.createdDate).fromNow()}</div>
            </div>
            <div>
                <Rating value={review.rating} readOnly/>
                <div className='ml-2'>{review.comment}</div>
                <hr className='mt-4 mb-4'/>
            </div>
        </div>
      ))}
    </div>
  )
}

export default ListRating
