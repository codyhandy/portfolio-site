import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
    return (
        <div>
            <div className="wrapper">
               <Navbar />
                <div className="">
                { children } 
                </div>  
            </div>
            <Footer />
        </div>

    );
}
 
export default Layout;