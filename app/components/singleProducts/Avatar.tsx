import Image from 'next/image'
import React from 'react'
import {FaUserCircle} from "react-icons/fa"

interface AvatarProps {
    src?: string | null | undefined; 
}

const Avatar = ({src}: AvatarProps) => {
      if(src)
      {
        return <Image src={src} alt='avatar' className='rounded-full' width="30" height="30"/>
      }
  return (
    <div>
       <FaUserCircle size={24}/>
    </div>
  )
}

export default Avatar
