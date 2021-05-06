import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            <div className="container mx-auto">
               { children } 
            </div> 
            <Footer />
        </div>
    );
}
 
export default Layout;