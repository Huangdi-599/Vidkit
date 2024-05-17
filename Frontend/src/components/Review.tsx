import review1 from '../assets/review1.png'
import review2 from '../assets/review2.png'
import review3 from '../assets/review3.png'
import review4 from '../assets/review4.png'
import review5 from '../assets/review5.png'
import reviewlg1 from '../assets/reviewlg1.png'
import reviewlg2 from '../assets/reviewlg2.png'
import reviewlg3 from '../assets/reviewlg3.png'
import reviewlg4 from '../assets/reviewlg4.png'
import reviewlg5 from '../assets/reviewlg5.png'
function Review() {
  return (
    <>
        <div className='mb-[120px] flex flex-col lg:hidden'>
            <h1 className="mb-[8px] text-textHead font-clash font-semibold md:text-[64px] md:leading-[72px] text-[36px] leading-[44px]">What users say</h1>
            <p className="mb-[64px] text-textBody font-aeonik font-normal md:text-[24px] md:leading-[32px] text-[20px] leading-[28px]">Here are feedback from our lovely users from all over the world.</p>
            <div className='flex flex-col gap-[24px]'>
                <div className='rounded-[16px] hover:scale-105 transition-transform h-full w-full'>
                    <img className='h-full w-full' src={review1} alt="" />
                </div>
                <div className='rounded-[16px] hover:scale-105 transition-transform h-full w-full'>
                    <img className='h-full w-full' src={review2} alt="" />
                </div>
                <div className='rounded-[16px] hover:scale-105 transition-transform h-full w-full'>
                    <img className='h-full w-full' src={review3} alt="" />
                </div>
                <div className='rounded-[16px] hover:scale-105 transition-transform h-full w-full'>
                    <img className='h-full w-full' src={review4} alt="" />
                </div>
                <div className='rounded-[16px] hover:scale-105 transition-transform h-full w-full'>
                    <img className='h-full w-full' src={review5} alt="" />
                </div>

            </div>
        </div>
        <div className='mb-[120px] lg:flex flex-col hidden'>
          <h1 className='mb-[8px] text-textHead font-clash font-semibold text-[64px] leading-[72px]'>What users say</h1>
          <p className='mb-[64px] text-textBody font-normal text-[34px] leading-[32px]'>Here are feedback from our lovely users from all over the world.</p>
          <div className='flex items-center gap-[24px] mb-[24px]'>
            <div className='rounded-[16px] hover:scale-105 transition-transform h-full w-[70%]'>
              <img className='h-full w-full' src={reviewlg1} alt="" />
            </div>
            <div className='rounded-[16px] hover:scale-105 transition-transform h-full w-[30%]'>
              <img className='h-full w-full' src={reviewlg2} alt="" />
            </div>
          </div>
          <div className='grid grid-cols-3 gap-[24px]'>
            <div className='rounded-[16px] hover:scale-105 transition-transform h-full w-full'>
              <img className='h-full w-full' src={reviewlg3} alt="" />
            </div>
            <div className='rounded-[16px] hover:scale-105 transition-transform h-full w-full'>
              <img className='h-full w-full' src={reviewlg4} alt="" />
            </div>
            <div className='rounded-[16px] hover:scale-105 transition-transform h-full w-full'>
              <img className='h-full w-full' src={reviewlg5} alt="" />
            </div>
          </div>
        </div>
    </>
  )
}

export default Review
