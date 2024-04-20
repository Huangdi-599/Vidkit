import { Formik, Form, Field } from 'formik';
import { Button } from '@mui/material';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
interface FormValues {
  video: any;
}
function VideoProcessor() {
  const initialValues: FormValues = { video: null };
  const handleVideoUpload = (video: File) => {
    console.log('Processing Video:', video);
    // Process the video file here. This could involve preparing FormData
    // and sending it to a server or handling the file in some other way.
  };
  return (
    <>
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
          <div className='flex items-center justify-center rounded-b-[8px] py-[170px] px-[24px] md:py-[200px] lg:py-[238px] lg:px-[348px] md:px-[80px] bg-[#ab1eaa] opacity-[48%]'>
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
                      <div className='hidden lg:block font-aeonik font-medium text-[20px] leading-[28px] text-center py-[16px] px-64px'>
                        or drag & drop here 
                      </div>
                    </label>
                  </Form>
                )}
              </Formik>
          </div>
      </div>
      
    </>
  )
}

export default VideoProcessor
