import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

    let ref = useRef(null)
    const data =[
        {
            desc:"this is a card of the document you can download it",
            fileSize:".9mb",
            close: true,
            tag:{
                isopen:true,
                tagtitle:"Upload",
                tagcolor:"green"
            }
        },
        {
            desc:"this is a card of the document you can download it",
            fileSize:".4mb",
            close: false,
            tag:{
                isopen:true,
                tagtitle:"Download Now",
                tagcolor:"green"
            }
        },
        {
            desc:"this is a card of the document you can download it",
            fileSize:"4mb",
            close: true,
            tag:{
                isopen:false,
                tagtitle:"Download Now",
                tagcolor:"green"
            }
        }
    ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index)=>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground
