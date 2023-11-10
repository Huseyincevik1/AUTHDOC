import './navbar.css';
import logo from '/assets/png/logo1.png';
import { Button } from '@/components/ui/button';
import { AlignJustify } from 'lucide-react';
import ModeToggle from '@/components/mode-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  return (
    <div className='navbar sticky top-0 p-[0.5rem] mb-8 backdrop-blur-lg'>
      <div className='navbar-container'>
        <div className='navbar-left'>
          <img
            src={logo}
            alt='logo'
            className='logo-img'
          />
          <span className='logo-name hidden md:block'>AUTH DOC</span>
        </div>
        <ul className='navbar-right'>
          <li className='hidden sm:block cursor-pointer transition-colors hover:text-[#8569d4]'>
            <a>Home</a>
          </li>
          <li className='hidden sm:block cursor-pointer transition-colors hover:text-[#8569d4]'>
            <a>About</a>
          </li>
          <li className='hidden sm:block cursor-pointer transition-colors hover:text-[#8569d4]'>
            <a>Contact</a>
          </li>
          <li className=' sm:block cursor-pointer transition-colors hover:text-[#8569d4]'>
            <div className='navbar-mode-toggle'>
              <ModeToggle />
            </div>
          </li>
          <li className=' sm:block cursor-pointer transition-colors hover:text-[#8569d4]'>
            <Button>Login</Button>
          </li>

          <li className='flex sm:hidden'>
            <div className='flex '>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <AlignJustify />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Home</DropdownMenuItem>
                  <DropdownMenuItem>About</DropdownMenuItem>
                  <DropdownMenuItem>Contact</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
