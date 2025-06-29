import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div id='home' className='home'>
            <div>
                <h2>Summer Canvas</h2>
                <h1>Step Into Summer with Effortless Style</h1>
                <p>Experience ultimate comfort and breathable design with our summer canvas collection. Perfect for warm days, city strolls, or casual weekends — your feet deserve this refresh.</p>
                <Link to="/Allshoes" className="shop-now-btn">SHOP NOW</Link>
            </div>
        </div>
    );
};

export default Home;
