import React from 'react'

interface SetBtnProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const SetButton = ({onClick}: SetBtnProps) => {
  return (
    <div className='w-full sm:w-1/2 text-center p-2 rounded-md text-lg md:font-semibold border-2 bg-slate-700 text-white hover:bg-white hover:text-slate-700'>
      <button onClick={onClick}>Add to Cart</button>
    </div>
  )
}

export default SetButton
