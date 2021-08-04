import Head from 'next/head'

const Contact = () => {
    return ( 
        <>
            <Head>
                <title>Cody Handy | Contact</title>
            </Head>
            
            <div className="flex-container">
                <div className="banner">
                    <div className="name">
                        <h1 className="">Cody</h1>
                        <h1 className="">Handy</h1>
                    </div>
                    
                    <h2 className="">Web Developer</h2>
                    </div>

                <div className="contact-info">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <p>780 518 3958</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p>contact [at] codyhandy [dot] ca</p>
                    </div>
                </div>
            </div> 
            {/* end of the flex container  */}
        </>
     );
}
 
export default Contact;