import Head from 'next/head'
import Image from 'next/image'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <Head>
                <title>Cody Handy | About</title>
            </Head>

            <h1 data-aos="fade-left">About Me</h1>
            <div className="flex-container"  data-aos="fade-up">
                <div>
                    <Image src="/portrait.png" alt="portrait" width={357} height={500} />
                </div>

                <div>
                    <p>I am</p>
                </div>
            </div>
        </>
    )
}

export default About;