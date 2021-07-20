import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav className="navigation">
            <div className="">
                <Link href="/"><Image className="" src="/logo.png" width={60} height={60} /></Link>
            </div>
            <div className="nav-pages">
                <Link href="/"><a>Home</a></Link>
                <p>|</p>
                <Link href="/projects"><a>Projects</a></Link> 
                <p>|</p>
                <Link href="/contact"><a>Contact</a></Link> 
            </div>
             
        </nav>
     );
}
 
export default Navbar;