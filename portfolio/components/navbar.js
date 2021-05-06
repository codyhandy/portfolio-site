import Link from 'next/link';

const Navbar = () => {
    return ( 
        <nav className="flex justify-between px-8 py-4">
            <div className="logo">
                <h1>Cody Handy</h1>
            </div>
            <div className="flex justify-between w-1/4">
                <Link href="/"><a>Home</a></Link> 
                <Link href="/projects"><a>Projects</a></Link> 
                <Link href="/contact"><a>Contact</a></Link> 
            </div>
             
        </nav>
     );
}
 
export default Navbar;