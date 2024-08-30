import React from 'react'
import Hero from '../home/Hero'
import Navbar from '../../common/Navbar'
import Header from '../../common/Header'
import Form from '../home/Form'
import Footer from '../../common/Footer'
import SwiperSlider from '../home/SwiperSlider'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header className="bg-gradiant" />
            <Hero />
            <SwiperSlider />
            {/* <Form /> */}
            <Footer />
        </div>
    )
}

export default Home