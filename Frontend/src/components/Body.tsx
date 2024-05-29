import image from '../assets/pngwing.svg'
import Review from './Review'
import { FC } from 'react'
const instructions = [
  {
    id :1,
    title:'Choose video',
    desc:'Click the “Add your video” button to select your video file / drag and drop your video at the center of the page.',
  },
  {
    id :2,
    title:'Upload video',
    desc:'Select your video file and let it complete uploading (cancel if you change your mind)',
  },
  {
    id :3,
    title:'Choose tool',
    desc:'Click on the “Compress Video” button to start compression (or switch to other tools',
  },
  {
    id :4,
    title:'Download video',
    desc:'Click the “Download video” button to start downloading your video (choose other video formats if need)',
  },
]
const Features = [
  {
    title:'Video compress',
    descr:'With Vidkit you can compress your lovely videos for any platform usage.',
    text:'Compress video',
    link:'compress',
    isAav:true
  },
  {
    title:'Video to Audio',
    descr:'With Vidkit you can convert your lovely videos into other formats.',
    text:'Convert video',
    link:"toAudio",
    isAav:true

  },
  {
    title:'Video Trim',
    descr:'With Vidkit you can compress your lovely videos for any platform usage.',
    text:'Trim Video',
    link:"trim",
    isAav:false
  },
  {
    title:'Video to Gif',
    descr:'With Vidkit you can compress your lovely videos for any platform usage.',
    text:'Convert to Gif',
    link:"gif",
    isAav:false
  },
]
interface TextProps {
  handleTextChange: (key: "default" | "compress" | "toAudio" | "trim" | "gif") => void;
}
const Body:FC<TextProps> = ({handleTextChange}) => {
  return (
    <body id='how' >
      <div className='dark:bg-[#0D0D0D] dark:text-white px-[16px] md:px-[48px] flex flex-col lg:hidden mt-[150px]'>
        <h1 className="mb-[8px] text-textHead dark:text-white font-clash font-semibold md:text-[64px] md:leading-[72px] text-[36px] leading-[44px]">How to use</h1>
        <p className="mb-[40px] text-textBody dark:text-white font-aeonik font-normal md:text-[24px] md:leading-[32px] text-[20px] leading-[28px]">4 quick and easy steps to use Vidkit video tools</p>
        <div className="flex flex-col gap-[24px]">
          {instructions.map((item, index)=>(
          <div key={index} className={`${item.id === 2 && 'md:ml-[188px] dark:bg-[#444444]'} ${item.id === 3 && 'dark:bg-[#444444] md:mr-[188px]'} bg-BgColor dark:bg-[#1d1d1d] flex flex-col p-[24px] md:p-[48px] rounded-[16px]`}>
            <div className={`${(item.id === 2 || item.id === 3) ? 'bg-secondary ' : 'bg-primary'} mb-[24px] font-clash  text-white text-[40px] leading-[48px] md:text-[64px] md:leading-[70px] py-[8px] md:px-[32px] px-[24px] rounded-[8px] w-fit`}>{item.id}</div>
            <h1 className="mb-[8px] text-textHead dark:text-white font-clash font-semibold md:text-[32px] md:leading-[40px] text-[28px] leading-[36px]">{item.title}</h1>
            <p className="text-textBody dark:text-white font-aeonik font-normal text-[16px] leading-[24px]">{item.desc}</p>
          </div>
          ))}
        </div>
        <div className="my-[100px] md:my-[120px] py-[100px] mx-[-16px] md:mx-[-48px] px-[16px] md:px-[48px] bg-BgColor dark:bg-[#323232]">
          <h1 className="mb-[8px] text-textHead dark:text-white font-clash font-semibold md:text-[64px] md:leading-[88px] text-[36px] leading-[44px]">All in one toolkit</h1>
          <p className="mb-[64px] text-textBody dark:text-white font-aeonik font-normal text-[20px] md:text-[28px] md:leading-[36px] leading-[28px]">With Vidkit, you can get a full comprehensive suite of tools help edit, manage and have fun with your videos.</p>
          <div className="flex flex-col gap-[40px]">
            {
              Features.map((item, index)=>(
                <div key={index} className="bg-white dark:bg-[#1d1d1d] shadow-my py-[32px] px-[24px] md:px-[48px] md:py-[48px] rounded-[8px] md:rounded-[16px] flex flex-col ">
                  <h1 className="mb-[8px] text-textHead dark:text-white font-clash font-semibold md:text-[40px] md:leading-[48px] text-[28px] leading-[36px]">{item.title}</h1>
                  <p className="mb-[40px] md:mb-[24px] text-textBody dark:text-white font-aeonik font-normal md:text-[20px] md:leading-[28px] text-[16px] leading-[24px]">{item.descr}</p>
                  <div className='mb-[24px] md:mb-[-24px] h-[64px] w-[89.35px] md:w-[139.6px] md:h-[100px] md:self-end'>
                    <img className='h-full w-full' src={image} alt="viskit"  />
                  </div>
                  { item.isAav ?(
                    <a onClick={()=>{handleTextChange(item.link as "default" | "compress" | "toAudio" | "trim" | "gif")}} href='#hero' className="text-primary cursor-pointer font-aeonik font-bold md:text-[24px] md:leading-[32px] text-[16px] leading-[24px]" >
                      {`${item.text} >>`}
                    </a>
                    ):(
                      <button className='cursor-not-allowed w-fit font-aeonik font-bold md:text-[24px] md:leading-[32px] text-[16px] text-[#b8b8b8] leading-[24px] rounded-[12px] border border-solid border-[#b8b8b8] py-[8px] px-[16px]'>
                        Coming Soon
                      </button>
                    )
                  }
                </div>
              ))
            }
          </div>
        </div>
        <Review />
      </div>
      <div className='dark:bg-[#0D0D0D] hidden px-[128px] lg:flex flex-col mt-[200px] '>
        <h1 className='mb-[8px] text- dark:text-white font-clash font-semibold text-[64px] leading-[72px]'>How to use</h1>
        <p className='mb-[64px] text- dark:text-white font-normal text-[34px] leading-[32px]'>4 quick and easy steps to use Vidkit video tools</p>
        <div  className='flex flex-wrap flex-row gap-[24px] w-full'>
          {instructions.map((item, index)=>(
            <div key={index} className={`${(item.id === 2 || item.id === 3) ? 'w-[43%] bg-[#fceefc] dark:bg-[#444444] ' : 'w-[57%] flex-1 bg-BgColor dark:bg-[#1d1d1d]'} flex flex-col  p-[48px] rounded-[16px]`}>
              <div className={`${(item.id === 2 || item.id === 3) ? 'bg-secondary' : 'bg-primary'} mb-[24px] font-clash text-white text-[64px] leading-[70px] py-[8px] px-[32px] rounded-[8px] w-fit`}>{item.id}</div>
              <h1 className="mb-[8px] text-textHead dark:text-white font-clash font-semibold md:text-[32px] leading-[40px]">{item.title}</h1>
              <p className="text-textBody dark:text-white font-aeonik font-normal text-[16px] leading-[24px]">{item.desc}</p>
            </div>
            ))}

        </div>
        <div className='py-[100px] mx-[-128px] my-[120px] bg-BgColor dark:bg-[#323232] px-[128px]'>
          <h1 className='mb-[8px] text-textHead dark:text-white font-clash font-semibold text-[64px] leading-[72px]'>All in one toolkit</h1>
          <p className='mb-[64px] text-textBody dark:text-white font-normal text-[34px] leading-[32px]'>With Vidkit, you can get a full comprehensive suite of tools help edit, manage and have fun with your videos.</p>
          <div className='grid grid-cols-2 gap-[24px]'>
            {
              Features.map((item, index)=>(
                <div key={index} className="bg-white dark:bg-[#1d1d1d] shadow-my p-[48px] rounded-[16px] flex flex-col ">
                  <h1 className="mb-[8px] text-textHead  dark:text-white font-clash font-semibold text-[40px] leading-[48px]">{item.title}</h1>
                  <p className="mb-[292px] text-textBody dark:text-white  font-aeonik font-normal text-[20px] leading-[28px]">{item.descr}</p>
                  <div className='flex flex-row-reverse items-end justify-between'>
                    <div className='h-[100px] w-[139.6px] hover:scale-125 transition-transform'>
                      <img className='h-full w-full' src={image} alt="vidkit"  />
                    </div>
                    { item.isAav ?(
                    <a onClick={() => handleTextChange(item.link as "default" | "compress" | "toAudio" | "trim" | "gif")}  href='#hero'
                    className="text-primary cursor-pointer font-aeonik font-bold text-[24px] leading-[32px]" >
                      {`${item.text} >>`}
                    </a>
                    ):(
                      <button className='cursor-not-allowed w-fit font-aeonik font-bold text-[24px] leading-[32px]  text-[#b8b8b8]  rounded-[12px] border border-solid border-[#b8b8b8] py-[8px] px-[16px]'>
                        Coming Soon
                      </button>
                    )
                    }
                  </div> 
                </div>
              ))
              }
          </div>
        </div>
        <Review />
      </div>
    </body>
  )
}

export default Body
