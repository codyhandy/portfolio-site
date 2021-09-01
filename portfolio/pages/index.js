import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Cody Handy</title>
      </Head>
      <div className="flex-container main"  >
        <div className="banner" data-aos="fade-right">
          <div className="name" >
            <h1 className="">Cody</h1>
            <h1 className="">Handy</h1>
          </div>
          
          <h2 className="">Web Developer</h2>
        </div>

        <div className="bio" data-aos="fade-left">
          <p>I'm a web developer with a primary focus on front-end development, although I am open to other projects and opportunities that will expand my skillset. Currently I am most interested in the creation of web applications.</p>

          <p>If you are looking for helping creating a website then you have come to the right place. I can build mobile-friendly websites that are tailored to your needs.</p>

          <div className="action-links">
            
            <a className="card" href="/resume-cody-handy.pdf" download>
              <div className="circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg> 
              </div>
              <p className="title">Download CV</p>
            </a>

            <Link href="/projects">
              <a className="card">
                  <div className="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="title">View Projects</p>
              </a>
            </Link>

            <Link href="/about">
              <a className="card">
                <div className="circle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="title">About Me</p>
              </a>
            </Link>
            
          </div> {/* end of the action links */}
          
        </div> {/* end of the bio */}

      </div> {/* end of the main content */}
    </>
  )
}
