import './navbar.css';
import logo from '/assets/png/logo1.png';
import { AlignJustify } from 'lucide-react';
import ModeToggle from '@/components/mode-toggle';
import { Link } from 'react-router-dom';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
	return (
		<>
			<div className='navbar p-[0.5rem] mb-8'>
				<div className='navbar-container'>
					<Link to='/'>
						<div className='navbar-left'>
							<a href='/'>
								<img
									src={logo}
									alt='logo'
									className='logo-img'
								/>
							</a>
							<span className='logo-name hidden md:block'>AUTH DOC</span>
						</div>
					</Link>
					<ul className='navbar-right'>
						<li className='hidden sm:block cursor-pointer transition-colors hover:text-[#8569d4]'>
							<Link to='/'>Home</Link>
						</li>

						<li className='hidden sm:block cursor-pointer transition-colors hover:text-[#8569d4]'>
							<a href='#howitworks'>How It Works</a>
						</li>

						<li className='hidden sm:block cursor-pointer transition-colors hover:text-[#8569d4]'>
							<a href='#faq'>FAQ</a>
						</li>

						<li className=' sm:block cursor-pointer transition-colors hover:text-[#8569d4]'>
							<div className='navbar-mode-toggle'>
								<ModeToggle />
							</div>
						</li>

						<li className='flex sm:hidden'>
							<div className='flex '>
								<DropdownMenu>
									<DropdownMenuTrigger>
										<AlignJustify />
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuItem>
											<a href='#howitworks'>How It Works</a>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<a href='#header'>About</a>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<a href='#faq'>FAQ</a>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
