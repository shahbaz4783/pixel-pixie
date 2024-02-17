import { navLinks } from '@/constants/navLinks';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '../ui/button';
import MobileNav from './MobileNav';
import LinkItem from '../ui/link-item';

const Navbar = () => {
	return (
		<header className='flex justify-between sticky border px-8'>
			<div>
        <Link href={'/'}>Pixel Pixie
        </Link>
			</div>
			<nav className='hidden md:flex list-none gap-4'>
				{navLinks.map((data) => (
					<LinkItem href={data.path}>{data.label}</LinkItem>
				))}
			</nav>
			<menu className='hidden md:flex gap-6'>
				<SignedIn>
					<UserButton />
				</SignedIn>
				<SignedOut>
					<Link href={'/login'}>
						<Button variant={'ghost'}>Login</Button>
					</Link>
					<Link href={'/signup'}>
						<Button>SignUp</Button>
					</Link>
				</SignedOut>
			</menu>
			<div className='md:hidden'>
				<MobileNav />
			</div>
		</header>
	);
};

export default Navbar;
