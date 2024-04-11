import smhero from '../assets/smhero.svg'
import mdhero from '../assets/mdhero.svg'
import xlhero from '../assets/xlhero.svg'
import { useState,FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from '@mui/material';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
interface FormValues {
  video: any;
}
const Hero: FC =({Head, Text}) => {
  const initialValues: FormValues = { video: null };
  const bgImage = window.innerWidth >= 1024 ? xlhero : window.innerWidth >= 768 ? mdhero : smhero;
  const handleVideoUpload = (video: File) => {
    console.log('Processing Video:', video);
    // Process the video file here. This could involve preparing FormData
    // and sending it to a server or handling the file in some other way.
  };
  return (
    <div
    className="bg-cover bg-center h-[900px] md:h-[1080px]"
    style={{ backgroundImage: `url(${bgImage})` }}
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
          <div className='md:w-[500px]'>
            {Head}
            <p className='w-fit mt-[12px] text-center font-aeonik font-normal text-[20px] leading-[28px]'>{Text}</p>
          </div>
        </div>
        <div className='w-full'>
          <div className='bg-[#ab1eaa] rounded-t-[8px] p-[12px] md:p-[24px] flex item-center justify-between'>
            <p className='font-clash font-semibold text-[20px]  md:text-[24px] md:leading-[28px] leading-[24px] text-center'>Video Compress</p>
            <span className='flex items-center gap-[6px]'>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6673 7.99998C14.6673 4.31808 11.6825 1.33331 8.00065 1.33331C4.31875 1.33331 1.33398 4.31808 1.33398 7.99998C1.33398 11.6818 4.31875 14.6666 8.00065 14.6666C11.6825 14.6666 14.6673 11.6818 14.6673 7.99998Z" stroke="white" stroke-width="1.5"/>
                <path d="M8.16081 11.3333V7.99998C8.16081 7.68571 8.16081 7.52858 8.06314 7.43091C7.96554 7.33331 7.80841 7.33331 7.49414 7.33331" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.99414 5.33331H8.00014" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p className='font-aeonik font-normal text-[14px] leading-[18px] md:text-[16px] md:leading-[20px]'>Max size 1GB</p>
            </span>
          </div>
          <div className='flex items-center justify-center rounded-b-[8px] py-[170px] px-[24px] md:py-[200px] md:px-[80px] bg-[#ab1eaa] opacity-[48%]'>
              <Formik
                initialValues={initialValues}
                onSubmit={({ video }) => {
                  if (video) {
                    handleVideoUpload(video);
                  }
                }}
              >
                {({ setFieldValue, submitForm }) => (
                  <Form className='w-full'>
                    <input
                      id="video"
                      name="video"
                      type="file"
                      accept="video/*"
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const files = event.target.files;
                        const selectedFile = files !== null ? files[0] : null;
                        setFieldValue("video", selectedFile);
                        if (selectedFile) {
                          submitForm();
                        }
                      }}
                      hidden
                    />
                    <label htmlFor="video" className="w-full cursor-pointer">
                      <Button
                        sx={{display:'flex',gap:'8px', alignItems:"center", paddingY:"16px",paddingX:"64px", color:"white", width:'100%' , borderRadius:'12px', borderColor:"#FF42F7", borderWidth:"2px"}}
                        variant="outlined"
                        component="span" 
                        startIcon={<CloudDownloadOutlinedIcon />}
                      >
                        Add your video
                      </Button>
                    </label>
                  </Form>
                )}
              </Formik>
          </div>
        </div>
      </div>
      <div>
        
      </div>
      
    </div>
  )
}

export default Hero
