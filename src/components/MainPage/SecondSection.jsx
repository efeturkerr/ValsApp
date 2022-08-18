import React from 'react'


const SecondSection = () => {
  return (
    <div id='services' className='h-[100vh] w-[100%] flex sm:items-center justify-center relative flex align-center justify-center'>
        <div className='h-[100vh] w-[100%] z-[-1] flex items-center justify-center absolute blur-sm bg-cover bg-center bg-[url("https://miro.medium.com/max/1000/1*ruJkM8C94yaOSCmDFHJtsg.jpeg")]'>

        </div>
        <div className="text-stone-800 space-y-4 py-16 md:py-0 flex text-center p-2 flex-col max-w-6xl">
            <h2 className='text-4xl md:text-5xl font-semibold'>Web Geliştirme, Havadan kargo taşıma</h2>
            <p className='text-xl font-semibold'>Bir işletmeniz var ve onu internete mi taşımak istiyorsunuz? Biz tam da bunu yapıyoruz! İşletmenize ait bir Web sitesi tasarlayıp yayınlıyor, Google Haritalar vb. online aramalarda görünür olmasını sağlayarak daha çok müşteri çekmenize olanak sağlıyoruz. İnternette satış yapıyorsunuz ve hızlı bir kargoya mı ihtiyacınız var? Kargo aracı çağırın, 5 dakika içerisinde konumunuza bir hava aracı gönderip kargonuzu alalım ve dakikalar içerisinde müşterinize ulaştıralım. Kısaca işyerinizi havalara uçuruyoruz!</p>
        </div>
    </div>
  )
}

export default SecondSection