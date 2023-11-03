import './navbar.css';
import logo from '/assets/png/logo1.png';
import { Button } from '@/components/ui/button';
import ModeToggle from '@/components/mode-toggle';

export default function Navbar() {
  return (
    <div className='navbar  '>
      <div className='navbar-container'>
        <div className='navbar-left'>
          <img
            src={logo}
            alt='logo'
            className='logo-img'
          />
          <span className='logo-name'>AUTH DOC</span>
        </div>
        <ul className='navbar-right'>
          <li>
            <a className='navbar-link'>Home</a>
          </li>
          <li>
            <a className='navbar-link'>About</a>
          </li>
          <li>
            <a className='navbar-link'>Contact</a>
          </li>
          <li>
            <Button>Login</Button>
          </li>
          <li>
            <div className='navbar-mode-toggle'>
              <ModeToggle />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
