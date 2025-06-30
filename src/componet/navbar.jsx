import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={`${import.meta.env.BASE_URL}Treadly-logo.svg`} alt="Treadly Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/#home">Home</Link></li>
        <li><Link to="/#casual">Casual</Link></li>
        <li><Link to="/#basketball">Basketball</Link></li>
        <li><Link to="/#formal-chelsea">Formal</Link></li>
        <li><Link to="/#gym">Gym</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
