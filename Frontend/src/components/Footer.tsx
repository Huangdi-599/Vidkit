import smfooter from '../assets/smfooter.svg'
import mdfooter from '../assets/mdfooter.svg'
import xlfooter from '../assets/xlfooter.svg'
import  logo from '../assets/VIDKIT.svg'
import { FC } from 'react'
interface NavItem {
    name: string;
    nav: string;
    link: string;
}
const nav:NavItem[] = [
    {
        name:"Home", 
        nav:'#home',
        link:"compress"
    },
    {
        name:"How to use", 
        nav:'#how',
        link:"compress"
    },
    {
        name:"Video compress", 
        nav:'#hero',
        link:"compress",
    },
    {
        name:"Video to Audio", 
        nav:'#hero',
        link:"toAudio"
    },
    {
        name:"Contact", 
        nav:'mailto:adebayoh9@gmail.com',
        link:"compress"
    },

]
interface TextProps {
  handleTextChange: (key: "default" | "compress" | "toAudio" | "trim" | "gif") => void;
}
const Footer:FC<TextProps> = ({handleTextChange})=> {
    const bgImage = window.innerWidth >= 1024 ? xlfooter : window.innerWidth >= 768 ? mdfooter : smfooter;
  return (
    <>
        <footer
        style={{ backgroundImage: `url(${bgImage})` }} className="w-full flex flex-col gap-[40px] bg-cover lg:hidden px-[24px] pt-[88px] pb-[58px]">
           <div className="w-[100px] h-[20px]">
                <img className="w-full h-full" src={logo} alt='vidkitlogo'/>
            </div>
            {
                nav.map((item, index)=>(
                    <a href={item.nav} className='text-white font-aeonik font-medium text-[20px] leading-[28px]' key={index}>{item.name}</a>
                ))
            }
            <p className='mt-[24px] text-white font-aeonik font-medium text-[20px] leading-[32px]'>Vidkit.com v1. All rights reserved (2024)</p>
        </footer>
        <footer className='w-full hidden lg:flex flex-col gap-[40px] items-center justify-center py-[88px] bg-cover bg-no-repeat'
        style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="w-[100px] h-[20px]">
                <img className="w-full h-full" src={logo} alt='vidkitlogo'/>
            </div>
            <div className='flex flex-row items-center gap-[48px] justify-between py-[16px]'>
                {
                    nav.map((item, index)=>(
                        <a onClick={()=>{handleTextChange(item.link as "default" | "compress" | "toAudio" | "trim" | "gif")}} href={item?.nav} className='px-[16px] text-white font-aeonik font-medium text-[20px] leading-[28px]' key={index}>{item.name}</a>
                    ))
                }
            </div>
            <p className='mt-[24px] text-white font-aeonik font-medium text-[20px] leading-[32px]'>Vidkit.com v1. All rights reserved (2024)</p>
        </footer>
    </>
  )
}

export default Footer
