import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

import Button from '../components/Button';

const NotFound = () => {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<NextSeo title='404 Not Found - mbahArip' description="Can't find the page you want." />
			<main className='flex flex-col flex-1 justify-center w-full text-mbaharip-light'>
				{/* <Navbar Active={'Home'} /> */}

				<div className='max-w-screen-lg mx-auto'>
					<div className='flex flex-col items-center'>
						<div className='max-w-xs md:max-w-none'>
							<Image src={'/img-404.svg'} alt={'404 Not Found'} width={500} height={400} objectFit={'cover'} />
						</div>
						<div className='flex flex-col text-center text-sm md:text-base text-mbaharip-light font-mono'>
							{/* <span className='text-5xl md:text-6xl font-bold text-red-600 m-1'>Oops!</span> */}
							<div className='flex flex-col gap-2 bg-zinc-800/50 border-[1px] border-zinc-800 rounded-lg p-4'>
								<span>We can&apos;t find the page you&apos;re looking for!</span>
								<span>It might have been removed, or had it name changed!</span>
							</div>
							<Link passHref href={'/'}>
								<a className='my-8'>
									<Button Text={'Click here to go back to the homepage'} />
								</a>
							</Link>
						</div>
					</div>
				</div>

				{/* <Footer /> */}
			</main>
		</div>
	);
};

export default NotFound;
