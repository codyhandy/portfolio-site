// ONLY USE THIS PAGE IF LOADING THE PROJECT INFORMATION THROUGH AN API


// export const getStaticPaths = async () => {
//     const response = await fetch('http://www.codyhandy.ca/project-test.json');
//     const data = await response.json();

//     //maps the id of each project to a path, then returns the whole object
//     const paths = data.map(project => {
//         return {
//             params: { id: project.id.toString() }
//         }
//     })

//     return {
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const response = await fetch('http://www.codyhandy.ca/project-test.json/' + id);
//     const data = await response.json();

//     return {
//         props: { project: data }
//     }
// }

// const Details = ({ project }) => {
//     return (
//         <div>
//             <h1>Details Page - { project.name }</h1>
//             <p>{ project.description }</p>
//         </div>
//     );
// }
 
// export default Details;