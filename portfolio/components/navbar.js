import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav className="navigation">
            <div className="logo">
                {/* <Link href="/"><Image className="" src="/logo.png" width={60} height={60} /></Link> */}
                <Link href="/"><Image className="" src="/logo.svg" width={100} height={100} /></Link>
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