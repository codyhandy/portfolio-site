import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Ticker = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, disable: 'mobile' })
    }, [])

    return (
        <>
            <Head>
                <title>Projects | St. Albert Further Ed</title>
            </Head>

            <h1 data-aos="fade-left">St. Albert Further Education</h1>

            <div className="skills" data-aos="fade-left">
                <p>WordPress</p>
                <p>/</p>
                <p>PHP</p>
                <p>/</p>
                <p>Working in a team</p>
            </div>

            <div className="flex-container projects" data-aos="fade-up">
                <div>
                    <p>A full custom theme that was made for a client as the final project of my NAIT education. Worked in a small team in order to bring the clients vision to life.</p>
                    <p>My responsibilities with the site involved organizing how the content would be organized, and how that would be coded through WordPress to ensure that it would be easy to expand upon later.</p>
                </div>

                <Image src="/stalbert-furthered.jpg" alt="Stock Ticker Preview" width={600} height={300} />
            </div>

            {/* <div data-aos="fade-up">
                <Link href="/" >
                    <a className="view-page">View</a>
                </Link>
            </div> */}
        </>
    )
}

export default Ticker;