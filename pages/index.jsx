import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import * as fs from '../utils/firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LatestPost from '../components/LatestPost';
import { NextSeo } from 'next-seo';

const social = [
	{ icon: 'facebook', text: 'Arief Rachmawan', link: 'https://www.facebook.com/mbahArip07/' },
	{ icon: 'twitter', text: '@mbaharip_', link: 'https://twitter.com/mbahArip_' },
	{ icon: 'github', text: 'mbaharip', link: 'https://github.com/mbahArip/' },
	{ icon: 'artstation', text: 'Arief Rachmawan', link: 'https://www.artstation.com/mbaharip' },
	{ icon: 'discord', text: 'mbahArip_#9552', link: 'https://discord.com/users/652155604172931102' },
	{ icon: 'linkedin', text: 'Arief Rachmawan', link: 'https://www.linkedin.com/in/mbaharip' },
];
const groups = [
	{
		icon: '/groups/nekoalliance.jpg',
		text: 'Neko Alliance',
		links: [
			{ name: 'facebook', url: 'https://www.facebook.com/NekoAllianceDesign' },
			{ name: 'instagram', url: 'https://www.instagram.com/nekoalliance' },
		],
	},
	{
		icon: '/groups/kanoongraphics.jpg',
		text: 'Kanoon Graphics',
		links: [{ name: 'facebook', url: 'https://www.facebook.com/Kanoon48Graphics/' }],
	},
];
const transition = 'transition-all duration-100';

export async function getServerSideProps() {
	let firebaseData = [];

	const datas = await fs.readCollection('posts', { field: 'timestamp', dir: 'desc' }, 4);
	datas.forEach((data) => {
		firebaseData.push(JSON.stringify(data));
	});

	return { props: { firebaseData } };
}

export default function Home({ firebaseData }) {
	let posts = [];
	firebaseData.forEach((data) => {
		posts.push(JSON.parse(data));
	});
	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<NextSeo title='Home - mbahArip' />

			<main className='flex flex-col flex-1 w-full text-mbaharip-light'>
				{/* Navbar */}
				<Navbar Active={'Home'} />

				{/* Content */}
				<div className='max-w-screen-lg mx-auto'>
					{/* Main Header */}
					<div className='w-full min-h-screen flex flex-col items-center justify-center mx-auto relative top-[-4rem]'>
						<div className='flex flex-col items-center'>
							<div className='m-1 max-w-xl md:max-w-none'>
								<Image src={'/main.svg'} width={1024} height={300} objectFit={'contain'} alt='mbahArip' />
							</div>
							<span className='text-xl md:text-2xl font-mono italic'>3D Works // Design Graphics // Dev Wannabe</span>
							<span className='text-xs md:text-sm m-5 italic'>Dreams as if you will live forever, Live as if you will die today</span>
						</div>

						<div className='flex items-center gap-4 md:gap-10 absolute bottom-10 '>
							{social.map((obj) => (
								<Link href={obj.link} passHref key={obj.link}>
									<a
										className={`hover:text-mbaharip-hovLight text-sm flex flex-col items-center gap-2 ${transition} hover:bg-zinc-700 rounded-xl p-2`}
										target='_blank'
									>
										<FontAwesomeIcon icon={['fab', obj.icon]} size='2x' />
										<span className='hidden'>{obj.text}</span>
									</a>
								</Link>
							))}
						</div>
					</div>

					{/* Profile */}
					<div className='w-full min-h-screen flex flex-col mx-auto items-center justify-center gap-8'>
						<span className='font-mono font-bold text-4xl underline underline-offset-2 decoration-8 decoration-mbaharip-light/50 tracking-wide md:tracking-widest'>
							About Me
						</span>
						<div className='flex flex-col-reverse md:flex-row justify-center mt-8 items-center gap-8 md:gap-32'>
							<p className='text-md md:text-xl max-w-md text-center'>
								Hello! My name is{' '}
								<span className='font-bold text-2xl underline underline-offset-2 decoration-2 decoration-mbaharip-light/90 text-mbaharip-lightHover'>
									Arief Rachmawan
								</span>{' '}
								, I&apos;m currently a student at local university in Bandung, Indonesia. <br />
								I love doing 3D Works, Graphic Design, and Programming. <br />
								<br />
								I&apos;m going to post all my works here, hope you like it! ❤
							</p>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={'/logoSquare.png'}
								className='rounded-full border-2 md:border-4 border-mbaharip-light max-w-[10rem] md:max-w-none'
								width={200}
								height={200}
								alt='Arief Rachmawan'
							/>
						</div>

						<div className='flex flex-col justify-center items-center gap-4'>
							<span className='font-mono font-bold text-xl underline underline-offset-2 decoration-2 decoration-mbaharip-light/90 tracking-wide md:tracking-widest'>
								Current Group
							</span>
							<div className='flex flex-col md:flex-row gap-4 md:gap-32'>
								{groups.map((group) => (
									<div className='flex md:flex-col justify-center items-center gap-8' key={group.text}>
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											src={group.icon}
											className='rounded-full border-2 md:border-4 border-mbaharip-light w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem] object-contain'
											alt={group.text}
											width={100}
											height={100}
										/>
										<div className='flex flex-col w-full items-center'>
											<span className=' font-mono text-md md:text-xl'>{group.text}</span>
											<div className='flex flex-row items-center justify-center gap-4 m-2 md:gap-2'>
												{group.links.map((link) => (
													<Link href={link.url} passHref key={link.name}>
														<a
															className={`hover:text-mbaharip-hovLight ${transition} hover:bg-zinc-700 rounded-xl p-2`}
															target='_blank'
														>
															<FontAwesomeIcon icon={['fab', link.name]} size='2x' />
														</a>
													</Link>
												))}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Latest Works */}
					{/* Limit to the latest 4*/}
					<div className='w-full flex flex-col mx-auto items-center gap-8 mt-8 mb-8'>
						<span className='font-mono font-bold text-4xl m-4 underline underline-offset-2 decoration-8 decoration-mbaharip-light/50 tracing-wide md:tracking-widest'>
							Latest Activity
						</span>
						<div className='w-full max-w-sm md:max-w-none grid grid-cols-1 md:grid-cols-2 gap-4 px-4'>
							{/* {fetchedData.map((data, index) => (
								<LatestPost Data={data} key={index} />
							))} */}
							{posts ? (
								<>
									{posts.map((post, index) => (
										<LatestPost Data={post} key={index} />
									))}
								</>
							) : (
								<div>Loading...</div>
							)}
						</div>
					</div>
				</div>

				{/* Footer */}
				<Footer />
			</main>
		</div>
	);
}
