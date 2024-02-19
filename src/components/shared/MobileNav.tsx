import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { navLinks } from '@/constants/navLinks';
import Link from 'next/link';
import { IoMdMenu } from 'react-icons/io';
import { Button } from '../ui/button';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import LinkItem from '../ui/link-item';

const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<IoMdMenu fontSize={24} />
			</SheetTrigger>
			<SheetContent>
				<SheetTitle>Pixel Pixie</SheetTitle>
				<SheetDescription>
					<nav className='list-none flex flex-col'>
						{navLinks.map((data, index) => (
							<LinkItem key={index} href={data.path}>{data.label}</LinkItem>
						))}
					</nav>
					<menu className='flex flex-col gap-6'>
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
				</SheetDescription>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
