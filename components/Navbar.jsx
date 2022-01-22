import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavigationMenu from './NavigationMenu';

const Navbar = ({ Active, Hide = false }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenuHandle = () => {
		menuOpen ? setMenuOpen(false) : setMenuOpen(true);
	};

	return (
		<>
			<div className='flex h-16 bg-zinc-900/50 sticky top-0 border-b border-gray-700/50 backdrop-blur-md z-[100] p-2 px-4'>
				<div className='flex item-center justify-between w-full max-w-5xl mx-auto'>
					<Link passHref href='/'>
						<a className='flex items-center gap-2 my-auto opacity-75 hover:opacity-100 transition-opacity duration-100'>
							<Image src={'/navbar-icon.svg'} width={64} height={32} alt={'mbahArip'} />
							<span className='font-mono text-2xl text-white tracking-wide hidden md:block'>mbahArip</span>
						</a>
					</Link>
					<div className={`text-xl gap-1 ${Hide ? 'hidden' : 'hidden md:flex'}`}>
						{NavigationMenu.map((menu) => (
							<Link href={menu.url} key={menu.name}>
								<a
									className={`${
										Active == menu.name ? 'text-mbaharip-hovLight bg-zinc-700' : 'hover:bg-zinc-800'
									} p-2 rounded-xl hover:text-mbaharip-hovLight transition-all duration-100`}
								>
									{menu.name}
								</a>
							</Link>
						))}
					</div>
					<button className={`text-xl items-center ${Hide ? 'hidden' : 'flex md:hidden'} md:hidden`} onClick={toggleMenuHandle}>
						{menuOpen ? <FontAwesomeIcon icon={['fas', 'times']} /> : <FontAwesomeIcon icon={['fas', 'bars']} />}
					</button>
				</div>
			</div>

			{/* Menu Hamburger */}
			<div
				className={`${
					menuOpen ? 'left-0' : 'left-[100%]'
				} flex-col w-full h-full min-h-screen min-w-screen mx-auto fixed bg-zinc-900 z-[99] transition-all duration-200`}
			>
				<div className='flex flex-col py-16 text-xl'>
					{NavigationMenu.map((menu) => (
						<Link href={menu.url} key={menu.name}>
							<a
								className={`${
									Active == menu.name ? 'text-mbaharip-hovLight bg-zinc-700' : 'hover:bg-zinc-800'
								} p-2 hover:text-mbaharip-hovLight transition-all duration-100`}
							>
								{menu.name}
							</a>
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default Navbar;
