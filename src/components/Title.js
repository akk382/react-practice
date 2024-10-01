import { Link } from 'react-router-dom';
import logo from '../images/logo.jpeg'; // Add a logo.jpeg of your choice

const Title = () => {
    return (
        <Link to='/'><img alt='App Logo' src={logo} className='logo'/></Link>
    );
}

export default Title;