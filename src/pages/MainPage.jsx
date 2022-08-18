import React from 'react'
import Footer from '../components/Footer'
import FirstSection from '../components/MainPage/FirstSection'
import SecondSection from '../components/MainPage/SecondSection'
import ThirdSection from '../components/MainPage/ThirdSection'
import FourthSection from '../components/MainPage/FourthSection'
import Navbar from '../components/Navbar'

const MainPage = () => {
  return (
    <>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <Footer />
    </>
  )
}

export default MainPage