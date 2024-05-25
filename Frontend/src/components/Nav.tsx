import  logo from '../assets/VIDKIT.svg'
import Menu from '../assets/menu.png'
import Close from '../assets/close.svg'
import { useState, FC } from 'react'
interface NavItem {
  name: string;
  nav: string;
  link: string;
}
const nav:NavItem[] = [
  {
      name:"Home", 
      nav:'#home',
      link:'compress'
  },
  {
      name:"How to use", 
      nav:'#how',
      link:'compress'
  },
  {
      name:"Video compress", 
      nav:'#hero',
      link:'compress',
  },
  {
      name:"Video to Audio", 
      nav:'#hero',
      link:'toAudio'
  },
  {
      name:"Contact", 
      nav:'mailto:adebayoh9@gmail.com',
      link:'compress'
  },

]
interface TextProps {
  handleTextChange: (key: "default" | "compress" | "toAudio" | "trim" | "gif") => void;
}
const Nav:FC<TextProps> = ({handleTextChange}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div id="home">
      <nav  className="font-clash bg-primary bg-opacity-[80%] flex lg:hidden md:pt-[24px] md:pb-[24px] md:px-[48px] pt-[24px] px-[16px] pb-[16px] justify-between items-center">
        <div className="w-[100px] h-[20px]">
          <img className="w-full h-full" src={logo} alt='vidkitlogo'/>
        </div>
        <div className="relative">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isMenuOpen ? 
          <div className="w-6 h-6  transition-all duration-300 transform rotate-180">
            <img className='h-full w-full' src={Close} alt="" />
          </div> :
          <div className="w-6 h-6 transition-all duration-300" >
            <img className='h-full w-full' src={Menu} alt="" />
          </div>
          }
        </button>
        
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 p-[8px] bg-opacity-[80%] rounded-b-[16px] flex flex-col items-center justify-center bg-[#AB1EAA] rounded-lg shadow-lg z-10">
            {
              nav.map((item, index)=>(
                <a onClick={()=>{handleTextChange(item.link as "default" | "compress" | "toAudio" | "trim" | "gif")}} key={index} href={item.nav} className="px-[16px] py-[12px] whitespace-nowrap text-white text-[16px] font-medium leading-[24px] text-aeonik  hover:bg-gray-200 cursor-pointer">{item.name}</a>
              ))
            }
            
          </div>
        )}
      </div>
      </nav>
      <nav  className='hidden text-white bg-primary bg-opacity-[80%] lg:flex py-[16px] px-[48px] flex-row items-center justify-between'>
        <div className="w-[200px] h-[40px]">
          <img className="w-full h-full" src={logo} alt='vidkitlogo'/>
        </div>
        <div className='flex flex-row gap-[24px]'>
          <p className='font-aeonik font-medium text-[20px] leading-[28px] p-[16px]'>How to use</p>
          <p className='font-aeonik font-medium text-[20px] leading-[28px] p-[16px]'>Video tools</p>
        </div>
      </nav>
    </div>
  )
}

Nav.propTypes = {

}

export default Nav
