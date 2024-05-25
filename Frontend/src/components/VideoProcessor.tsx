import { Formik, Form, } from 'formik';
import { Button, LinearProgress } from '@mui/material';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import { useState } from 'react';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CloseIcon from '@mui/icons-material/Close';
import VideocamIcon from '@mui/icons-material/Videocam';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
interface FormValues {
  video: File | null;
}
function VideoProcessor() {
  const [stage, setStage] = useState<'initial' | 'uploaded'>('initial');
  const [processStage, setProcessStage] = useState<'default' | 'processing' | 'complete'>('default')
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const initialValues: FormValues = { video: null };
  const handleVideoUpload = (video: File) => {
    console.log('Processings Video:', video);
    setProcessStage('processing');
    setTimeout(() => {
      setProcessStage('complete');
    }, 3000)
    // Process the video file here. This could involve preparing FormData
    // and sending it to a server or handling the file in some other way.
  };
  console.log(stage)
  console.log(videoFile)
  return (
    <>
      <div className='w-full'>
          <div className=''>
              <Formik
                initialValues={initialValues}
                onSubmit={({ video }) => {
                  if (video) {
                    handleVideoUpload(video);
                  }
                }}
              >
                {({ setFieldValue, submitForm }) => (
                  <Form className='!w-full !h-full'>
                    { stage === 'initial' &&
                      <div className='w-full h-full bg-primary opacity-[48%] flex items-center justify-center rounded-b-[8px] py-[170px] px-[24px] md:py-[200px] lg:py-[238px] lg:px-[348px] md:px-[80px]'>
                      <input
                        id="video"
                        name="video"
                        type="file"
                        accept="video/*"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          const files = event.target.files;
                          const selectedFile = files !== null ? files[0] : null;
                          setFieldValue("video", selectedFile);
                          setVideoFile(selectedFile);
                          if (selectedFile) {
                            setStage('uploaded');
                            //submitForm();
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
                      </div>
                    }
                    {
                      stage === 'uploaded' && videoFile &&
                      <div className='flex flex-col text-[#1d1d1d] bg-white pt-[40px] px-[40px] w-full rounded-b-[8px] border-2 border-red-500 pb-[170px] md:pb-[200px] lg:pb-[320px]'>
                        <p className='mb-[16px] font-aeonik font-bold lg:text-[16px] lg:leading-[20px]'><p></p>Uploaded files<span className='h-[16px] w-[16px] bg-primary rounded-full'></span></p>
                        <div className='mb-[45px]'>
                          <div className=' flex items-center justify-between rounded-[8px] py-[16px] px-[24px] border-2 border-[#efefef]'>
                            <div className='flex flex-col'>
                              <p className='mb-[4px] font-clash capitalize font-semibold lg:text-[24px] lg:leading-[32px] text-[#1d1d1d]'>{videoFile.name}</p>
                              <div className='flex items-center'>
                                <p className='uppercase font-aeonik font-normal leading-[18px] text-[#444444]'>{videoFile.type}</p>
                                <div className='mx-[8px] h-[18px] border border-[#e4e4e4]'></div>
                                <p className='font-aeonik font-normal leading-[18px] text-[#444444]'>{(videoFile.size / (1024 * 1024)).toFixed(2)}mb</p>
                              </div>
                            </div>
                            {
                              processStage === ('default' || 'complete') && 
                              <div onClick={()=>{setVideoFile(null), setStage('initial') ,setProcessStage('default')}} className='self-center cursor-pointer'>
                                <DeleteForeverOutlinedIcon/>
                              </div>
                            }
                            {
                              processStage === 'processing' && 
                              <div onClick={()=>{setProcessStage('default')}} className='self-center cursor-pointer'>
                                <CloseIcon/>
                              </div>
                            }
                          </div>
                          {
                              processStage === 'processing' && 
                              <div>
                                <LinearProgress className='w-full' />
                              </div>
                          }
                        </div>
                        {
                          processStage === 'default' &&
                          <button onClick={submitForm} className='self-center flex items-center gap-[10px] font-aeonik lg:text-[24px] font-bold lg:leading-[32px] py-[16px] px-[64px] rounded-[12px] bg-primary text-white'>
                            <VideocamIcon /> Process Video
                          </button>
                        }
                        {
                          processStage === 'complete' &&
                          <button className='self-center flex items-center gap-[10px] font-aeonik lg:text-[24px] font-bold lg:leading-[32px] py-[16px] px-[64px] rounded-[12px] bg-primary text-white'>
                            <FileDownloadOutlinedIcon /> Download Video
                          </button>
                        }
                      </div>
                    }
                  </Form>
                )}
              </Formik>
          </div>
          
      </div>
      
    </>
  )
}

export default VideoProcessor
