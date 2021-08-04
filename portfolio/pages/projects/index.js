import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

// this requires an endpoint for the site to load the data.
// use this unless the project information is going to be hard coded

// export const getStaticProps = async () => {
    
//     const response = await fetch('http://www.codyhandy.ca/project-test.json');
//     const data = await response.json();

//     return {
//         props: { projects: data }
//     }
// }

const Projects = ({ projects }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return ( 
        <>
            <Head>
                <title>Cody Handy | Projects</title>
            </Head>

            <h1 data-aos="fade-left">All Projects</h1>
            <div className="projects-grid">
                {/* {projects.map(project => (
                    <div key={project.id}>
                        <h3>{ project.name }</h3>
                    </div>
                ))} */}

                <Link href="/projects/ticker">
                    <a className="card" data-aos="fade-up">
                        <Image src="/stockticker.jpg" alt="Stock Ticker Example" height={300} width={600} />
                        <h2>React Stock Ticker</h2>
                    </a>
                </Link>
                

                <div className="card" data-aos="fade-up">
                <Image src="/st-albert-furthered.jpg" alt="St. Albert Furthered" height={300} width={600} />
                    <h2>St. Albert Further Education</h2>
                </div>

            </div>
        </>
     );
}
 
export default Projects;