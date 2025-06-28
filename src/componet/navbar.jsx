import './navbar.css';

const Navbar = () => {
  return (
      <nav>
        <img src="/Treadly-logo.svg" alt="logo" />
        <ul>
            <a href="/#home">home</a>
            <a href="/#casual">casual</a>
            <a href="/#basketball">basketball</a>
            <a href="/#formal-chelsea">formal</a>
            <a href="/#gym">gym</a>
        </ul>
      </nav>
  )
}

export default Navbar
