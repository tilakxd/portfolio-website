import React from 'react'
import { ReactNode } from 'react'

function SocialIcon({icon, url}:{icon: ReactNode, url:string}) {
  return (
    <>
    <a href={url} target='_blank' className='bg-gray-200 border-2 border-rose-400 flex hover:bg-rose-300 rounded-xl'>
        {icon}
    </a>
    </>
  )
}

export default SocialIcon