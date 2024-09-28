import logo from '../images/logo.jpeg'; // Add a logo.jpeg of your choice

const Title = () => {
    return (
        <a href='/'>
            <img alt='App Logo' src={logo} className='logo'/>
        </a>
    );
}

export default Title;