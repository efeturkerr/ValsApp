import React from 'react'

const ThirdSection = () => {
  return (
    <div id='aboutwe' className='h-[100vh] w-[100%] flex items-center justify-center relative flex items-center justify-center'>
        <div className='min-h-[100vh] w-[100%] flex p-2 items-center justify-center absolute bg-neutral-800'>
            <div className="space-y-3 flex flex-col text-center items-center justify-center max-w-6xl">
                <div className="image">
                    <img draggable="false" src="https://valsteknoloji.com/img/pricing.svg" className='w-10/12' alt="" />
                </div>

                <div className="text space-y-4 flex flex-col items-center justify-center">
                    <h1 className='text-4xl font-bold'>Nereden çıktı bu Vals Teknoloji?</h1>
                    <p>Yeni bir kuruluş olabiliriz fakat bu tecrübeli bir ekibimiz olmadığı anlamına gelmiyor!. Hava aracı ve internet meraklısı iki lise arkadaşı bu ilgi alanlarını birbirlerine anlatırlar ve bunların ortak bir hizmet ettiği platform oluşur: Vals Teknoloji. İki arkadaş tarafından kurulan ve ekibindeki sayısını günümüz itibariyle 4 kişiye çıkaran Vals Teknoloji, Türkiye'nin teknolojide öncüsü olma amacıyla kurulmuştur. Telekomdan kargoya, mail hizmetlerinden mesajlaşma servisine kadar internetin ve teknolojinin pek çok alanında kendisine hedef belirlemiş ve bu yolda emin adımlarla ilerlemektedir. Siz de bu serüvene katılmak için yatırımcı olabilirsiniz! Detaylar için aşağıdaki butona tıklayabilirsiniz.</p>
                    <a href='#services' className='w-max p-2 px-4 transition hover:bg-sky-600 bg-sky-500 rounded-[8px]'>Yatırım yapmak istiyorum</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection