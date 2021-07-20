import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
    return (
        <div className="">
            <Navbar />
            <div className="">
               { children } 
            </div> 
            <Footer />
        </div>
    );
}
 
export default Layout;