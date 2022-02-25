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
                <title>Projects | Web App</title>
            </Head>

            <h1 data-aos="fade-left">Web Application Prototype</h1>

            <div className="skills" data-aos="fade-left">
                <p>Tailwind</p>
                <p>/</p>
                <p>Adobe XD</p>
                <p>/</p>
                <p>UI | UX</p>
            </div>

            <div className="flex-container projects" data-aos="fade-up">
                <div>
                    <p>A simple design mockup that was created for a fictional web application. It was first was designed in Adobe XD, then a simple prototype was created using Tailwind.</p>
                    <p>Created to show the speed at which a functional design mockup can be created, instead of using the more redimentary prototyping tools built in Adobe XD.</p>
                </div>

                <Image src="/web-app.jpg" alt="Web App Preview" width={600} height={300} />
            </div>

            <div data-aos="fade-up">
                <Link href="/" >
                    <a className="view-page">View</a>
                </Link>
            </div>
        </>
    )
}

export default Ticker;