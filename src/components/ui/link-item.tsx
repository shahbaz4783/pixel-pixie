'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface LinkItemProps {
	href: string;
	children: React.ReactNode;
}

const LinkItem: FC<LinkItemProps> = ({ href, children }) => {
	const path = usePathname();
	const isActive = path.startsWith(href);

	return (
		<Link
			href={href}
			className={`hover:text-green-900 transition-all ${
				isActive && 'text-green-700'
			}`}
		>
			{children}
		</Link>
	);
};

export default LinkItem;
