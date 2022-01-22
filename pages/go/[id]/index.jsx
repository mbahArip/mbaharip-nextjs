import { useRouter } from 'next/router';
import Image from 'next/image';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { useState } from 'react';
import { NextSeo } from 'next-seo';

const Go = ({}) => {
	const router = useRouter();
	const { id } = router.query;
	const [inputPassword, setInputPassword] = useState('');
	const [showError, setShowError] = useState(false);
	const password = 'lorem';

	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<NextSeo title={`[Locked] ${id} - mbahArip`} />

			<main className='flex flex-col flex-1 w-full text-mbaharip-light justify-between'>
				{/* Navbar */}
				<Navbar Hide />

				{/* Content */}
				<div className='max-w-screen mx-auto flex flex-col items-center'>
					<Image src={'/img-lock.svg'} alt='Password required' width={300} height={300} />
					{/* <span className='font-mono text-2xl'>Password protected</span> */}
					<span className='my-0 opacity-75'>To open the link, please enter the password below:</span>
					<form
						className='w-full flex items-center gap-2 my-4'
						onSubmit={(e) => {
							e.preventDefault();
							if (inputPassword === password) {
								window.location.assign('https://duckduckgo.com/');
							} else {
								setShowError(true);
								setTimeout(() => {
									showError && setShowError(false);
								}, 10000);
							}
						}}
					>
						<input
							type='password'
							className='w-full px-2 py-1 placeholder:text-mbaharip-light/50 bg-zinc-900 border-[1px] border-mbaharip-light/25 rounded-lg focus:border-mbaharip-hovLight/50 focus:outline-none'
							onChange={(e) => {
								setInputPassword(e.currentTarget.value);
							}}
						/>
						<button
							type='submit'
							className='px-2 py-1 bg-zinc-800 hover:bg-zinc-700 border-[1px] border-zinc-800 hover:border-zinc-700 rounded-lg transition-color duration-100'
						>
							Unlock
						</button>
					</form>
					<span
						className={`text-red-50 font-mono z-50 fixed ${
							showError ? 'bottom-0' : 'bottom-[-5%]'
						} py-2 w-screen bg-red-500 text-center transition-all duration-100`}
					>
						Wrong password!
					</span>
				</div>

				{/* Footer */}
				<Footer />
			</main>
		</div>
	);
};

export default Go;
