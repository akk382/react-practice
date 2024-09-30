import { useState } from "react";
import Title from "./Title";

const Header = () => {
    const [authenticated, setAuthenticated] = useState(false);

    const handleLogin = () => {
        setAuthenticated(authenticated => !authenticated);
    }

    return (
        <div className='header'>
            <Title />
             <ul className='nav-items'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            <button className="login-button" onClick={handleLogin}>{authenticated ? 'Logout' : 'Login'}</button>
        </div>
    );
}

export default Header;