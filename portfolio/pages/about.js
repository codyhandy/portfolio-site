import Image from 'next/image'
import HeadTitle from '../components/headTitle'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, disable: 'mobile'});
    }, []);

    return (
        <>
            <HeadTitle title='About' />

            <h1 data-aos="fade-left">About Me</h1>
            <div className="flex-container about"  data-aos="fade-up">
                <div className="image-container">
                    <Image src="/portrait.png" alt="portrait" width={357} height={500} />
                </div>

                <div className="text-container">
                    <p>I'm Cody, a Web Developer currently based in the Edmonton Area. I moved to the area 4 years ago after growing up in Grande Prairie, and spending a brief time living in New Zealand.</p>
                    <p>I recently graduated from the Digital Media and IT program at NAIT, with a focus on web development. I ended up finishing the program with honours and a 4.0 GPA. Now I am looking for work to expand my skills!</p>
                </div>
            </div>
        </>
    )
}

export default About;