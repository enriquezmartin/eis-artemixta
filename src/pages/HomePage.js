import './styles/HomePage.css';

const HomePage = () => {
    const logo = require('../images/logo.png');
    return (
        <div className='homeContainer'>
            Bienvenidos a ArteMixta
            <img src={logo}  alt={"Logo de la academia"}/>
        </div>
    )
};
export default HomePage