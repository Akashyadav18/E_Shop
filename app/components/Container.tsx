import React from 'react'

interface Props {
    children: React.ReactNode
}

const Container = ({children}: Props) => {
  return (
    <div className='max-w-[1920] mx-auto px-4 md:px-8 xl:px-20'>
      {children}
    </div>
  )
}

export default Container
