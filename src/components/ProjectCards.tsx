import React from 'react'

function ProjectCards({url, info, title, sourcefile, demoLink, liveDemo }:{url:string, info:string, title:string, sourcefile:string, demoLink:string, liveDemo:string}) {
  return (
    <>
    <div className='max-w-lg w-full flex flex-col items-center border-2 border-red-400 rounded-lg p-6'>
        <a href={sourcefile} target='_blank'><img className='h-70 w-80 grayscale hover:grayscale-0 border-2 border-gray-400 rounded-lg my-2' src={url} alt="" /></a>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-white to-rose-400 my-3'>{title}</div>
        <p className='text-rose-400 text-base'>{info}</p>
        <a className = 'text-white hover:border-b-2 text-2xl my-2' href={demoLink} target='_blank'>{liveDemo}</a>
    </div>
    </>
  )
}

export default ProjectCards