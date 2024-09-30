import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/navbar/About';
import Contact from './components/navbar/Contact';
import Cart from './components/navbar/Cart';
import Login from './components/navbar/Login';
import Error from './components/errors/Error';


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
            <Outlet />
            <Footer />
        </React.Fragment>
    );
}

const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/home',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerConfig} />);