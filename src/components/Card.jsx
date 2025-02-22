import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div
     drag dragConstraints={reference} 
     whileDrag={{scale:1.1}} 
     dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} 
     className='relative flex-shrink-0 w-[14rem] h-[16rem] bg-zinc-700 rounded-[40px] text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 left-0 w-full '>
            <div className='flex items-center justify-between mb-3 py-3 px-8'>
                <h5>{data.fileSize}</h5> 
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center cursor-pointer'>
                    {data.close? <IoClose/> : <LuDownload size=".8em" color='#fff' />}
                
                </span>
            </div>
            {data.tag.isopen?  (
                <div className={`tag w-full py-4 bg-green-600 flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold '>{data.tag.tagtitle}</h3>    
                </div> 
            ): null
            }
               
        </div>
    </motion.div>
  )
}

export default Card
