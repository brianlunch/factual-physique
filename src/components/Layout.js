import Head from 'next/head';

import Navbar from './transparent-nav/Navbar';

const Layout = ({ children }) => {

    return(
        <div>
            <Head>
                <title>Factual Physique</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar/>
            {children}   
        </div>
    )
}

export default Layout;