import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cody Handy</title>
      </Head>
      <div className="flex-container">
        <div className="banner">
          <div className="name">
            <h1 className="">Cody</h1>
            <h1 className="">Handy</h1>
          </div>
          
          <h2 className="">Web Developer</h2>
        </div>

        <div className="bio">
          <p>I build websites! I create custom mobile-friendly websites to suit your needs, whether it is a simple single page design, or a more complex site that you would like to update yourself. I can help with creating your vision. </p>
          {/* <nav>
            <Link href="/projects"><a>View My Work</a></Link>
          </nav> */}
          <div className="action-links">
            
            <div className="card">
              <div className="circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg> 
              </div>
              <p className="title">Download</p>
              <p>CV / Resume</p>
            </div>

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
            
            <div className="card">
              <div className="circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <p className="title">Digital Art</p>
              <p>(Coming Soon)</p>
            </div>
          </div> {/* end of the action links */}
          
        </div> {/* end of the bio */}
        
      </div> {/* end of the main content */}
    </>
  )
}
