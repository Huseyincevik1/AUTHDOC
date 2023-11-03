import { Button } from '@/components/ui/button';
import svgImg from '/assets/svg/animated.svg';
import './header.css';

export default function Header() {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-container-left'>
          <div>
            <div className='hero-text'>
              <span className='authenticate '>AUTHENTICATE</span> YOUR
              EMPLOYEE'S SCHOOL DOCUMENTS
            </div>
          </div>

          <p className='description'>
            Our platform that ensures the secure and transparent verification of
            educational certificates. Start an experience that enhances
            collaboration between students, schools, and employers.
          </p>

          <Button className='connect-wallet p-7'>Connect Your Wallet</Button>
        </div>
        <div className='header-container-right'>
          <img
            className='right-container-img'
            src={svgImg}
            alt='helloImage'
          />
        </div>
      </div>
    </header>
  );
}
