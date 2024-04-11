import  logo from '../assets/VIDKIT.svg'
const Nav = props => {
  return (
    <>
      <nav className="font-clash bg-primary bg-opacity-[80%] flex lg:hidden md:pt-[24px] md:pb-[24px] md:px-[48px] pt-[24px] px-[16px] pb-[16px] justify-between items-center">
        <div className="w-[100px] h-[20px]">
          <img className="w-full h-full" src={logo} alt='vidkitlogo'/>
        </div>
        <div className="border-2 border-red-500 w-[24px] h-[24px]"></div>
      </nav>
      <nav className='hidden text-white bg-primary bg-opacity-[80%] lg:flex py-[16px] px-[48px] flex-row items-center justify-between'>
        <div className="w-[200px] h-[40px]">
          <img className="w-full h-full" src={logo} alt='vidkitlogo'/>
        </div>
        <div className='flex flex-row gap-[24px]'>
          <p className='font-aeonik font-medium text-[20px] leading-[28px] p-[16px]'>How to use</p>
          <p className='font-aeonik font-medium text-[20px] leading-[28px] p-[16px]'>Video tools</p>
        </div>
        <button className='border-2 border-white rounded-[12px] p-[16px] font-aeonik font-bold text-[20px] leading-[28px]'>
          Sign up for free</button>
      </nav>
    </>
  )
}

Nav.propTypes = {

}

export default Nav
