import React from 'react'

const Navbar = () => {
  
  const openMobileMenu = (e) => {
    document.querySelector("div.mobile-menu").classList.toggle("hidden")
  }

  return (
    <nav className='bg-zinc-800 p-1 sticky inset-0 z-[5]'>

      <div className='max-w-7xl p-2 py-2 mx-auto'>

        <div className="flex justify-between">
          <div className="logo">
            <p className='text-2xl tracking-tight'><span className='text-4xl'>V</span>ALS</p>
          </div>

          <div className="secondary-nav hidden md:flex items-center space-x-4">
            <a href='/#' className='transition hover:text-red-400'>Ana Sayfa</a>
            <a href='/#services' className='transition hover:text-red-400'>Neler Yapıyoruz?</a>
            <a href='/#aboutwe' className='transition hover:text-red-400'>Hakkımızda</a>
            <a href='/#contact' className='transition hover:text-red-400'>Referanslarımız</a>
            <a href="/contact" className='transition px-4 bg-red-500 hover:bg-red-600 p-[6px] rounded-[6px]'>İletişim</a>
          </div>

          <div className='flex md:hidden items-center'>
            <button className='mobile-menu-button'onClick={openMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

      </div>

      <div className="mobile-menu flex flex-col space-y-3 py-2 transition hidden">
        <a href='#main' className='transition hover:text-red-400 p-[6px]'>Ana Sayfa</a>
        <a href='#services' className='transition hover:text-red-400 p-[6px]'>Neler Yapıyoruz?</a>
        <a href='#aboutwe' className='transition hover:text-red-400 p-[6px]'>Hakkımızda</a>
        <a href='#contact' className='transition hover:text-red-400 p-[6px]'>Referanslarımız</a>
        <a href="/contact" className='transition bg-red-500 hover:bg-red-600 p-[6px] rounded-[6px]'>İletişim</a>
      </div>

    </nav>
  )
}

export default Navbar