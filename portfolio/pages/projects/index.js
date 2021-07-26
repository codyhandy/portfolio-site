import Head from 'next/head'
import Image from 'next/image'

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
    return ( 
        <>
            <Head>
                <title>Cody Handy | Projects</title>
            </Head>

            <h1>All Projects</h1>
            <div className="projects-grid">
                {/* {projects.map(project => (
                    <div key={project.id}>
                        <h3>{ project.name }</h3>
                    </div>
                ))} */}

                <div className="card">
                    <Image src="/stockticker.jpg" alt="Stock Ticker Example" height={300} width={600} />
                    <h2>Project example</h2>
                </div>
                <div className="card">
                <Image src="/st-albert-furthered.jpg" alt="St. Albert Furthered" height={300} width={600} />
                    <h2>Project example</h2>
                </div>
            </div>
        </>
     );
}
 
export default Projects;