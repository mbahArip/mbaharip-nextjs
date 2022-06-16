import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdOpenInNew } from 'react-icons/md';

const NavigationBar = ({}) => {
	const { pathname } = useRouter();
	const navigationMenu = [
		{
			name: 'Home',
			link: '/',
			external: false,
		},
		{
			name: 'Blog posts',
			link: '/blogs',
			external: false,
		},
		{
			name: 'Works gallery',
			link: '/works',
			external: false,
		},
		{
			name: 'Shop',
			link: 'https://shop.mbaharip.me',
			external: true,
		},
	];

	return (
		<>
			{/* Desktop */}
			<div
				className={`w-screen z-50 fixed top-0 bg-main-back-dark-1 hidden md:flex md:items-center md:justify-between py-2 px-4 gap-2`}
			>
				<div className={`w-fit flex`}>
					<img
						src={'/img/logo/icon.svg'}
						alt={'logo'}
						className={`h-8`}
					/>
				</div>
				<div className={`w-fit flex`}>
					{navigationMenu.map((item, index) => (
						<Link key={index} href={item.link}>
							<a
								title={item.name}
								target={item.external ? '_blank' : null}
								className={`px-4 py-2 hover:text-main-light-hover active:text-main-light-active font-bold text-lg ${
									pathname.includes(item.link)
										? 'text-main-light-hover cursor-default'
										: 'text-main-light/75 cursor-pointer'
								} transition-opacity transition-colors duration-75 flex items-center`}
							>
								{item.name}{' '}
								{item.external && <MdOpenInNew size={14} />}
							</a>
						</Link>
					))}
				</div>
				<div />
			</div>
		</>
	);
};

export default NavigationBar;
