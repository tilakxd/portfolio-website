import React from 'react'

function ProjectCards({url, info}:{url:string, info:string}) {
  return (
    <>
    <div className='max-w-lg w-full flex flex-col items-center border-2 border-red-400 rounded-lg p-6'>
        <img className='h-70 w-80' src={url} alt="" />
        <p className='text-rose-400 text-base'>{info}</p>
    </div>
    </>
  )
}

export default ProjectCards