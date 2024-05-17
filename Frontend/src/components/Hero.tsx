import smhero from '../assets/smhero.svg'
import mdhero from '../assets/mdhero.svg'
import xlhero from '../assets/xlhero.svg'
import { FC } from 'react';
import VideoProcessor from './VideoProcessor';
interface HeroProps {
  HeadText: ReactNode;
  Text: string;
}
const Hero:FC<HeroProps> =({HeadText, Text}) => {
  const bgImage = window.innerWidth >= 1024 ? xlhero : window.innerWidth >= 768 ? mdhero : smhero;
  return (
    <div
    className="bg-cover bg-center !h-[766px] md:!h-[1002px]"
    style={{ backgroundImage: `url(${bgImage})` }}
    id='hero'
    >
      <div className='text-white flex lg:hidden flex-col md:px-[48px] pt-[64px] px-[16px]'>
        <div className='mb-[64px] flex flex-col items-center justify-center'>
          <div className='items-center justify-center mb-[20px] py-[8px] px-[32px] rounded-[24px] border-2 border-white flex flex-row gap-[8px]'>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.65238 2.2961L10.8256 4.6619C10.9856 4.99122 11.4122 5.30711 11.7722 5.3676L13.8986 5.72381C15.2585 5.95233 15.5784 6.94704 14.5985 7.92831L12.9454 9.59511C12.6654 9.87738 12.5121 10.4218 12.5987 10.8116L13.0721 12.875C13.4453 14.5082 12.5854 15.14 11.1522 14.2864L9.15912 13.0968C8.79918 12.8817 8.20592 12.8817 7.83925 13.0968L5.84616 14.2864C4.41965 15.14 3.55308 14.5014 3.92638 12.875L4.39966 10.8116C4.48631 10.4218 4.333 9.87738 4.05302 9.59511L2.39988 7.92831C1.42665 6.94704 1.73995 5.95233 3.0998 5.72381L5.22623 5.3676C5.57952 5.30711 6.00614 4.99122 6.16612 4.6619L7.33932 2.2961C7.97925 1.01238 9.01912 1.01238 9.65238 2.2961Z" stroke="#FF42F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className='font-aeonik font-medium text-[16px] leading-[24px]'>Quick, Efficient & Quality</p>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.65238 2.2961L10.8256 4.6619C10.9856 4.99122 11.4122 5.30711 11.7722 5.3676L13.8986 5.72381C15.2585 5.95233 15.5784 6.94704 14.5985 7.92831L12.9454 9.59511C12.6654 9.87738 12.5121 10.4218 12.5987 10.8116L13.0721 12.875C13.4453 14.5082 12.5854 15.14 11.1522 14.2864L9.15912 13.0968C8.79918 12.8817 8.20592 12.8817 7.83925 13.0968L5.84616 14.2864C4.41965 15.14 3.55308 14.5014 3.92638 12.875L4.39966 10.8116C4.48631 10.4218 4.333 9.87738 4.05302 9.59511L2.39988 7.92831C1.42665 6.94704 1.73995 5.95233 3.0998 5.72381L5.22623 5.3676C5.57952 5.30711 6.00614 4.99122 6.16612 4.6619L7.33932 2.2961C7.97925 1.01238 9.01912 1.01238 9.65238 2.2961Z" stroke="#FF42F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className='md:w-[500px] flex flex-col justify-center items-center'>
            {HeadText}
            <p className='w-fit mt-[12px] text-center font-aeonik font-normal text-[20px] leading-[28px]'>{Text}</p>
          </div>
        </div>
        <div>
          <VideoProcessor />
        </div>
      </div>
      <div className='text-white hidden lg:flex flex-col pt-[96px]'>
        <div className='mx-[129px] mb-[96px] flex flex-col items-center justify-center '>
          <div className='w-fit items-center justify-center mb-[20px] py-[8px] px-[32px] rounded-[24px] border-2 border-white flex flex-row gap-[8px]'>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.65238 2.2961L10.8256 4.6619C10.9856 4.99122 11.4122 5.30711 11.7722 5.3676L13.8986 5.72381C15.2585 5.95233 15.5784 6.94704 14.5985 7.92831L12.9454 9.59511C12.6654 9.87738 12.5121 10.4218 12.5987 10.8116L13.0721 12.875C13.4453 14.5082 12.5854 15.14 11.1522 14.2864L9.15912 13.0968C8.79918 12.8817 8.20592 12.8817 7.83925 13.0968L5.84616 14.2864C4.41965 15.14 3.55308 14.5014 3.92638 12.875L4.39966 10.8116C4.48631 10.4218 4.333 9.87738 4.05302 9.59511L2.39988 7.92831C1.42665 6.94704 1.73995 5.95233 3.0998 5.72381L5.22623 5.3676C5.57952 5.30711 6.00614 4.99122 6.16612 4.6619L7.33932 2.2961C7.97925 1.01238 9.01912 1.01238 9.65238 2.2961Z" stroke="#FF42F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className='font-aeonik font-medium text-[16px] leading-[24px]'>Quick, Efficient & Quality</p>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.65238 2.2961L10.8256 4.6619C10.9856 4.99122 11.4122 5.30711 11.7722 5.3676L13.8986 5.72381C15.2585 5.95233 15.5784 6.94704 14.5985 7.92831L12.9454 9.59511C12.6654 9.87738 12.5121 10.4218 12.5987 10.8116L13.0721 12.875C13.4453 14.5082 12.5854 15.14 11.1522 14.2864L9.15912 13.0968C8.79918 12.8817 8.20592 12.8817 7.83925 13.0968L5.84616 14.2864C4.41965 15.14 3.55308 14.5014 3.92638 12.875L4.39966 10.8116C4.48631 10.4218 4.333 9.87738 4.05302 9.59511L2.39988 7.92831C1.42665 6.94704 1.73995 5.95233 3.0998 5.72381L5.22623 5.3676C5.57952 5.30711 6.00614 4.99122 6.16612 4.6619L7.33932 2.2961C7.97925 1.01238 9.01912 1.01238 9.65238 2.2961Z" stroke="#FF42F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className='flex flex-col justify-center items-center'>
            {HeadText}
            <p className='w-fit mt-[12px] text-center font-aeonik font-normal text-[20px] leading-[28px]'>{Text}</p>
          </div>
        </div>
        <div className='lg:mx-[150px] xl:mx-[212px]'>
          <VideoProcessor />
        </div>
      </div>
      
    </div>
  )
}

export default Hero
