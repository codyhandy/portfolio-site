import Head from 'next/head'

// this requires an endpoint for the site to load the data.
// use this unless the project information is going to be hard coded

// export const getStaticProps = async () => {
    
//     const response = await fetch('link to JSON endpoint');
//     const data = await response.json();

//     return {
//         props: { projects: data }
//     }
// }

const Projects = () => {
    return ( 
        <>
            <Head>
                <title>Cody Handy | Projects</title>
            </Head>
            
            <h1>All Projects</h1>
            <div className="projects">

            </div>
        </>
     );
}
 
export default Projects;