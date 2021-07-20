import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cody Handy</title>
      </Head>
      <div className="flex-container">
        <div>
          <div className="name">
            <h1 className="">Cody</h1>
            <h1 className="">Handy</h1>
          </div>
          
          <h2 className="">Web Developer</h2>
        </div>

        <div className="bio">
          <p>I build websites! I create custom mobile-friendly websites to suit your needs, whether it is a simple single page design, or a more complex site that you would like to update yourself. I can help with creating your vision. </p>
        </div>
        
      </div>
    </>
  )
}
