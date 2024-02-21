import React from 'react'

function ProjectCards({url, info, title, sourcefile}:{url:string, info:string, title:string, sourcefile:string}) {
  return (
    <>
    <div className='max-w-lg w-full flex flex-col items-center border-2 border-red-400 rounded-lg p-6'>
        <a href={sourcefile} target='_blank'><img className='h-70 w-80 grayscale hover:grayscale-0 border-2 border-gray-400 rounded-lg my-2' src={url} alt="" /></a>
        <div className='text-rose-400 my-2'>{title}</div>
        <p className='text-rose-400 text-base'>{info}</p>
    </div>
    </>
  )
}

export default ProjectCards