import Navbar from './transparent-nav/Navbar';

const Layout = ({ children }) => {

    return(
        <>
            <Navbar/>
            {children}   
        </>
    )
}

export default Layout;