import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div id='home' className='home'>
            <div>
                <h2>
                    summer canvas
                </h2>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod nobis tenetur ab fugiat tempora quaerat.</p>
                <Link to="/Allshoes" className="shop-now-btn">SHOP NOW</Link>
            </div>
        </div>
    );
};

export default Home;
