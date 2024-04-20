import smfooter from '../assets/smfooter.svg'
import mdfooter from '../assets/mdfooter.svg'
import xlfooter from '../assets/xlfooter.svg'

function Footer() {
    const bgImage = window.innerWidth >= 1024 ? xlfooter : window.innerWidth >= 768 ? mdfooter : smfooter;
  return (
    <>
        <footer
        style={{ backgroundImage: `url(${bgImage})` }} className="flex lg:hidden">
            
        </footer>
        <footer >

        </footer>
    </>
  )
}

export default Footer
