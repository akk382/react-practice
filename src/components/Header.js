import { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

const Header = () => {
    const [authenticated, setAuthenticated] = useState(false);

    const handleLogin = () => {
        setAuthenticated(authenticated => !authenticated);
    }

    return (
        <div className='header'>
            <Title />
             <ul className='nav-items'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
            </ul>
            <button className="login-button" onClick={handleLogin}>{authenticated ? 'Logout' : 'Login'}</button>
        </div>
    );
}

export default Header;