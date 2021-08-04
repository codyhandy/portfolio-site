import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
    return (
        <main>
            <div className="wrapper">
               <Navbar />
                <div className="">
                    { children } 
                </div>  
            </div>
            <Footer />
        </main>

    );
}
 
export default Layout;