import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaFacebookF } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='bg-zinc-800 p-8 flex flex-col md:flex-row'>
        <div className='flex flex-1 flex-col items-center'>
            <p className='text-2xl tracking-tight'><span className='text-4xl'>V</span>ALS</p>
            <p className='text-gray-400 text-lg'>Vals Teknoloji</p>
            <p>Develi/Kayseri, 38400</p>
            <p>+90 552 297 10 55</p>
            <a className='text-sky-500' href="mailto:valstechnologyy@gmail.com">valstechnologyy@gmail.com</a>
        </div>
        <div className='flex flex-1 flex-col items-center space-y-2'>
            <p className='text-2xl tracking-tight'>Şirketimiz Hakkında</p>
            <p className='w-1/2 text-start text-gray-400'>Kargo teslimatından mobil uygulama geliştirmeye kadar, teknoloji ile dans ediyoruz.</p>
            <div className="social flex space-x-2">
                <div className="box w-[40px] h-[40px] flex items-center justify-center rounded bg-zinc-900">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="box w-[40px] h-[40px] flex items-center justify-center rounded bg-zinc-900">
                  <FaTwitter className="text-2xl" />
                </div>
                <div className="box w-[40px] h-[40px] flex items-center justify-center rounded bg-zinc-900">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="box w-[40px] h-[40px] flex items-center justify-center rounded bg-zinc-900">
                  <FaLinkedin className="text-2xl" />
                </div>
                <div className="box w-[40px] h-[40px] flex items-center justify-center rounded bg-zinc-900">
                  <FaYoutube className="text-2xl"/>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer