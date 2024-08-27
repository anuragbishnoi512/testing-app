import React from 'react'
import Hero from '../home/Hero'
import Navbar from '../../common/Navbar'
import Header from '../../common/Header'
import Form from '../home/Form'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header className="bg-gradiant" />
            <Hero />
            <Form />
        </div>
    )
}

export default Home