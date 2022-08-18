import React from 'react'

const FourthSection = () => {
  return (
    <div id='contact' className='h-[100vh] w-[100%] flex items-center justify-center relative flex items-center justify-center'>
        <div className='min-h-[100vh] w-[100%] flex p-2 items-center justify-center absolute bg-neutral-900'>
            <div className="flex flex-col text-center items-center justify-center max-w-6xl">
                <div className="space-y-4 flex flex-col items-center justify-center">
                    <h1 className='text-4xl font-bold'>Teknoloji ile dans etmeyi tercih edenler.</h1>
                    <p className='text-lg'>Henüz bu şerefe kimse erişemedi. Bu büyük bir fırsat. İlk olmak için bizimle iletişime geçin!</p>
                    <a href='#services' className='w-max p-2 px-4 transition hover:bg-emerald-700 bg-emerald-600 rounded-[8px]'>Bizimle iletişime geçin!</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FourthSection