import React from 'react'

function Background() {
  return (
    <>
    <div className=' fixed z-[2] h-screen w-full bg-zinc-800'>
      <div className=" absolute top-[5%] w-full py-10 flex justify-center text-zinc-500 font-semibold text-xl">Documents</div>
      <h1 className='text-[12vw] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] leading-none tracking-tighter font-semibold text-zinc-900'>Docs.</h1>
    </div>
    </>
  )
    
}

export default Background
