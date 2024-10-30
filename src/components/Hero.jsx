import React from 'react'
import { LuImport } from 'react-icons/lu'
import ayush from "../assets/websiteimage.jpg"

function Hero() {
  return (
   <section>
    <div className='flex flex-col items-center justify-center'>
        <h1 className='mt-16 overflow-hidden text-[12vw] text-center font-semibold uppercase leading-none'>
       Ayush <br/> Portfolio
       </h1>
       <div className='mt-8 '>
       <a href="/ayushresume.pdf"
       target='_blank'
       rel='noopener noreferrer'
       download
       className='flex items-center justify-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400 '
       >
        <a href='src\components\ayushresume.pdf' >  <span>  Download Resume.pdf </span></a>
       
        <LuImport className='ml-2'/>


       </a>
       </div>
  
     <div className='w-full '>
       <img src={ayush} alt='benson ki pensil' className=' w-full object-cover mt-10' />
     </div>

    </div>
   </section>
  )
}

export default Hero
