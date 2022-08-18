import React from 'react'

const FirstSection = () => {
  return (
    
    <div className='h-[100vh] w-[100%] flex items-center justify-center relative flex align-center justify-center'>
        <div className='h-[100vh] w-[100%] z-[-1] flex items-center justify-center absolute blur-sm bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29kZXxlbnwwfHwwfHw%3D&w=1000&q=80")]'>

        </div>
        <div className="text space-y-4 p-2 md:w-1/2 flex text-center items-center justify-center flex-col max-w-6xl">
            <h2 className='text-5xl font-semibold'>Teknoloji ile 'havalı' bir dansa var mısınız?</h2>
            <p className='text-xl font-medium'>Sizi veya işletmenizi teknoloji ile dans etmeye davet ediyoruz. Hayatınızın her yerinde teknolojinin avantajlarını size sunarak hayatınızı kolaylaştırıyoruz.</p>
            <a href='#services' className='p-2 px-4 transition hover:scale-110 hover:bg-red-600 bg-red-500 rounded-[8px]'>Nasıl mı?</a>
        </div>
    </div>
  )
}

export default FirstSection