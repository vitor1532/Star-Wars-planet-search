import logo from '../../public/logo.png';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <div className="outter-logo-wrapper">
        <div className="logo-wrapper">
          <img src={ logo } alt="star-wars-logo" />
        </div>
      </div>
    </header>
  );
}

export default Header;
