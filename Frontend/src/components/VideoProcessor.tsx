import { Formik, Form, } from 'formik';
import { Button, LinearProgress } from '@mui/material';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import { useState } from 'react';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CloseIcon from '@mui/icons-material/Close';
import VideocamIcon from '@mui/icons-material/Videocam';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import {toast } from 'react-toastify';
interface FormValues {
  video: File | null;
}
interface Props {
  type:string
  darkmode:boolean
}
const YOUR_CLOUD_NAME = 'dwwmrxkip'
function VideoProcessor({type,darkmode}:Props) {
  const [stage, setStage] = useState<'initial' | 'uploaded'>('initial');
  const [processStage, setProcessStage] = useState<'default' | 'processing' | 'complete'>('default')
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [compressedVideoUrl, setCompressedVideoUrl] = useState<string | null>(null);
  const initialValues: FormValues = { video: null };

  const handleVideoUpload = async (video: File) => {
    // console.log('Processings Video:', video);
    setProcessStage('processing');
    const formData = new FormData();
    formData.append('file', video);
    formData.append('upload_preset', 'ml_default');

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${YOUR_CLOUD_NAME}/video/upload`, {
        method: 'POST',
        body: formData,
      });
      if (response.status === 200  || response.ok === true){
        const data = await response.json();
        if(type === ('default' || 'compress')){
          setCompressedVideoUrl(`${data.secure_url.replace('/upload/', '/upload/q_auto:low/')}`);
        }
        if (type === 'toAudio'){
          setAudioUrl(`${data.secure_url.replace('/upload/', '/upload/f_mp3/')}`);
        }
        //toast('Operation Succesful')
        setProcessStage('complete');
      }
    } catch (error) {
      console.error('Error uploading video:', error);
      toast.error('Operation Failed, Try again')
    }
    // setTimeout(() => {
    //   setProcessStage('complete');
    // }, 3000)
    // Process the video file here. This could involve preparing FormData
    // and sending it to a server or handling the file in some other way.
  };
  
  // console.log(stage)
  // console.log(videoFile)
  // console.log("compree", compressedVideoUrl)
  // console.log("type", type)
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
                      <div className='w-full h-full bg-primary opacity-[48%] flex items-center justify-center rounded-b-[8px] py-[150px] px-[24px] md:py-[200px] lg:py-[238px] lg:px-[348px] md:px-[80px]'>
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
                      <div className={`${darkmode?'bg-[#1d1d1d] text-white':"text-[#1d1d1d] bg-white"} flex flex-col md:pt-[40px] pt-[16px] px-[16px] md:px-[40px] w-full rounded-b-[8px]  pb-[170px] md:pb-[200px] lg:pb-[320px]`}>
                        <div className='flex items-center gap-[10px] mb-[16px] font-aeonik font-normal lg:font-bold text-[16px] leading-[20px]'>
                          <p>Uploaded files</p>
                          <div className='h-[16px] w-[16px] bg-primary rounded-full'></div>
                        </div>
                        <div className='mb-[45px]'>
                          <div className=' flex md:flex-row flex-col items-center justify-between rounded-[8px] py-[16px] px-[24px] border-2 border-[#efefef]'>
                            <div className='flex flex-col'>
                              <p className='mb-[10px] font-clash capitalize font-semibold text-[20px] leading-[28px] md:text-[24px] md:leading-[32px] text-[#1d1d1d] dark:text-white'>{videoFile.name}</p>
                              <div className='flex items-center'>
                                <p className='uppercase font-aeonik text-[14px] font-normal leading-[18px] dark:text-white text-[#444444]'>{videoFile.type}</p>
                                <div className='mx-[8px] h-[18px] border border-[#e4e4e4]'></div>
                                <p className='font-aeonik font-normal text-[14px] leading-[18px] dark:text-white text-[#444444]'>{(videoFile.size / (1024 * 1024)).toFixed(2)}mb</p>
                              </div>
                            </div>
                            <div className="block border border-primary self-start md:self-center mt-[10px] md:mt-[0px] font-aeonik py-2 px-4 rounded-[8px] font-medium leading-[24px] text-[16px] ">
                              <select
                                className='focus:outline-none w-full h-full dark:bg-[#1d1d1d] dark:text-white'
                                //value={}
                                //onChange={(e) => onResolutionChange(e.target.value)}
                              >
                                <option value="240p">240p</option>
                                <option value="360p">360p</option>
                                <option value="480p">480p</option>
                                <option value="720p">720p</option>
                                <option value="1080p">1080p</option>
                              </select>
                            </div>
                            {
                              processStage === ('default' || 'complete') && 
                              <div onClick={()=>{setVideoFile(null), setStage('initial') ,setProcessStage('default')}} className='md:self-center self-end cursor-pointer'>
                                <DeleteForeverOutlinedIcon/>
                              </div>
                            }
                            {
                              processStage === 'processing' && 
                              <div onClick={()=>{setProcessStage('default')}} className='md:self-center self-end cursor-pointer'>
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
                          processStage === 'complete' && compressedVideoUrl &&
                          <div className='flex flex-col gap-[10px] items-center justify-center'>
                            <video controls width="300" height="300">                              
                              <source src={compressedVideoUrl} type="video/mp4" />
                            </video>
                            <a href={compressedVideoUrl} 
                              download 
                              className='self-center flex items-center gap-[10px] font-aeonik lg:text-[24px] font-bold lg:leading-[32px] py-[16px] px-[64px] rounded-[12px] bg-primary text-white'
                              >
                                <FileDownloadOutlinedIcon /> Download Video
                            </a>
                          </div>
                        }
                        {
                          processStage === 'complete' && audioUrl && 
                          <div className='flex flex-col gap-[10px] items-center justify-center'>
                            <audio controls>
                            <source src={audioUrl} type="audio/mpeg" />
                              Your browser does not support the audio element.
                            </audio>
                            <a 
                              href={audioUrl} 
                              download 
                              className='self-center flex items-center gap-[10px] font-aeonik lg:text-[24px] font-bold lg:leading-[32px] py-[16px] px-[64px] rounded-[12px] bg-primary text-white'
                            >
                              <AudiotrackIcon />Download Audio
                            </a>
                          </div>
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
