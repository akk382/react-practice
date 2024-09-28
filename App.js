import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './images/logo.jpeg'; // Add a logo.jpeg of your choice

// Designing Layout of the app
    /**
     * Header
     *  - Logo
     *  - Nav Items (right)
     *  - Cart
     * Body
     *  - Search Bar
     *  - Restaurant List
     *      - Restaurant Card
     *          - Image
     *          - Rating
     *          - Tags
     *          - Cusines
     * Footer
     *  - Links
     *  - Copyright
     */

const HeaderComponent = () => {
    return (
        <div className='header'>
            <a href='/'>
                <img alt='App Logo' src={logo} className='logo'/>
            </a>
             <ul className='nav-items'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    );
}

const Body = () => {
    return (
        <h4></h4>
    );

}

const Footer = () => {

}

const AppLayout = () => {

    return (
        <React.Fragment>
            <HeaderComponent />
            <Body />
            <Footer />
        </React.Fragment>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);