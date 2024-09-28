import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

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
     *          - Name
     *          - Rating
     *          - Tags
     *          - Cusines
     * Footer
     *  - Links
     *  - Copyright
     */

const AppLayout = () => {

    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);