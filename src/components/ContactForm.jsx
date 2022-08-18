import React from 'react'

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div className='min-h-[90vh] p-32 bg-neutral-800 flex items-center justify-center'>
            <form onSubmit={handleSubmit} className="p-3 w-80 h-max py-4 flex flex-col justify-center space-y-3 rounded bg-neutral-900 text-white">
                <p className='text-xl font-bold'>İletişim Formu</p>
                <hr className='border border-neutral-800' />
                <label htmlFor="mail">Mail Adresiniz:</label>
                <input type="text" id='mail' className='bg-neutral-800 rounded'/>
                <label htmlFor="content">Mesajınız:</label>
                <textarea type="text" id='content' className='bg-neutral-800 rounded min-h-[50px] max-h-[450px]'/>
                <button type='submit' className='transition bg-sky-500 hover:bg-sky-600 p-1 rounded'>Gönder</button>
            </form>
        </div>
    )
}

export default ContactForm