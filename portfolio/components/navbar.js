import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav className="navigation">
            <div className="logo">
                <Link href="/"><a><Image className="" src="/logo.svg" width={100} height={100} /></a></Link>
            </div>
            <div className="nav-pages">
                <Link href="/projects"><a>Projects</a></Link> 
                <p>|</p>
                <Link href="/about"><a>About</a></Link>
                <p>|</p>
                <Link href="/contact"><a>Contact</a></Link> 
            </div>
             
        </nav>
     );
}
 
export default Navbar;