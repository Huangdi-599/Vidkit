import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Body from './components/Body'

import { useState,ReactNode } from 'react';
//A
const HeroHead:Record<string, ReactNode> = {
  default:<h1 className='w-fit font-clash font-semibold text-[40px] lg:text-[88px] lg:leading-[104px] md:text-[72px] md:leading-[80px] leading-[48px] text-center'>Your <span className='text-[#FF42F7] underline'>Ultimate</span> Video Toolkit</h1> ,
  compress:<h1 className='w-fit font-clash font-semibold text-[40px] lg:text-[88px] lg:leading-[104px] md:text-[72px] md:leading-[80px] leading-[48px] text-center'>Video <span className='text-[#FF42F7] underline'>Compress</span></h1> ,
  toAudio:<h1 className='w-fit font-clash font-semibold text-[40px] lg:text-[88px] lg:leading-[104px] md:text-[72px] md:leading-[80px] leading-[48px] text-center'>Video to<span className='text-[#FF42F7] underline'>Audio</span></h1>,
  trim: "",
  gif:""
};
const HeroText = {
  default:"Media enthusiasts use Vidkit tools to edit their videos for the best quality.",
  compress: "With Vidkit you can compress your lovely videos for any platform usage.",
  toAudio: "With Vidkit you can convert your favorite videos into audios and keep listening.",
  trim: "",
  gif:""
};

function App() {
  const [herotext, setHeroText] = useState<"default" |"compress" | "edit" | "download">("default")
  const handleTextChange = (key: "default" | "compress" | "edit" | "download") => {
    setHeroText(key);
  };
  return (
    <>
    <Nav />
    <Hero Head={HeroHead[herotext]}
    Text={HeroText[herotext]}/>
    <Body handleTextChange={handleTextChange}/>
    </>
  )
}

export default App
