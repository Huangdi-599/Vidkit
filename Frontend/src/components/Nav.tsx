import  logo from '../assets/VIDKIT.svg'
import Menu from '../assets/menu.png'
import Close from '../assets/close.svg'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
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
  darkmode:boolean
  toggledarkmode: ()=>void
}

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));
const Nav:FC<TextProps> = ({handleTextChange, darkmode, toggledarkmode}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div id="home">
      <nav  className={`${darkmode? 'bg-[#1d1d1d]':'bg-primary'} font-clash  bg-opacity-[80%] flex lg:hidden md:pt-[24px] md:pb-[24px] md:px-[48px] pt-[24px] px-[16px] pb-[16px] justify-between items-center`}>
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
             <MaterialUISwitch
              checked={darkmode}
              onChange={toggledarkmode}
               />
          </div>
        )}
      </div>
      </nav>
      <nav  className={`${darkmode? 'bg-[#1d1d1d]':'bg-primary'} hidden text-white bg-opacity-[80%] lg:flex py-[16px] px-[48px] flex-row items-center justify-between`}>
        <div className="w-[200px] h-[40px]">
          <img className="w-full h-full" src={logo} alt='vidkitlogo'/>
        </div>
        <MaterialUISwitch
        checked={darkmode}
        onChange={toggledarkmode}
        />
        <div className='flex flex-row gap-[24px]'>
          <a href='#how'>
            <p className='cursor-pointer font-aeonik font-medium text-[20px] leading-[28px] p-[16px]'>How to use</p>
          </a>
          <a onClick={()=>{handleTextChange('compress')}}  href='#hero' className='font-aeonik font-medium text-[20px] leading-[28px] p-[16px]'>Video Compress</a>
          <a onClick={()=>{handleTextChange('toAudio')}}  href='#hero' className='font-aeonik font-medium text-[20px] leading-[28px] p-[16px]'>Video to Audio</a>
        </div>
      </nav>
    </div>
  )
}

Nav.propTypes = {

}

export default Nav
