import Head from 'next/head';

import Navbar from './transparent-nav/Navbar';

const Layout = ({ children }) => {

    return(
        <div>
            <Head>
                <title>Factual Physique | Coach</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="Ireland's best online fitness, weight loss and transformation coach."/>
            </Head>
            <Navbar/>
            {children}   
        </div>
    )
}

export default Layout;