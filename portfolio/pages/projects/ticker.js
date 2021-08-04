import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Ticker = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <>
            <Head>
                <title>Projects | Stock Ticker</title>
            </Head>

            <h1 data-aos="fade-left">React Stock Ticker</h1>

            <div className="skills" data-aos="fade-left">
                <p>React</p>
                <p>|</p>
                <p>APIs</p>
                <p>|</p>
                <p>Bootstrap</p>
            </div>

            <div className="flex-container projects" data-aos="fade-up">
                <div>
                    <p>A simple web application built using the React JavaScript library. It allows the user to enter a stock that they want the information for, then the application uses API calls to the get the previous days trading information for the selected stock. </p>
                    <p>The user can also save a number of stocks, the information from that stock is then saved into a store. The styling is simple, and was created using Bootstrap 4.</p>
                </div>

                <Image src="/stockticker.jpg" alt="Stock Ticker Preview" width={600} height={300} />
            </div>

            <Link href="/"><a data-aos="fade-up" className="link">View</a></Link>
        </>
    )
}

export default Ticker;