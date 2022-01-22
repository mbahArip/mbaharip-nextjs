import { useEffect, useState } from 'react';
import Link from 'next/link';

import Divider from '../../components/Divider';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import { useHorizontalScroll } from '../../components/hooks/useHorizontalScroll';
import Markdown from '../../components/Markdown';
import PostCard from '../../components/PostCard';
import BlogCard from '../../components/BlogCard';

import * as firestore from '../../utils/firebase/firestore';
import { NextSeo } from 'next-seo';

export async function getServerSideProps(context) {
	const { id } = context.params;
	let document = await firestore.findDocument('posts', parseInt(id));
	let collection = await firestore.readCollection('posts');
	let collectionRandom = [];

	if (Object.keys(document) == 0) {
		return {
			notFound: true,
		};
	}

	collection = collection.sort(() => Math.random() - 0.5);
	for (let i = 0; i < 3; i++) {
		collectionRandom.push(collection[i]);
	}
	collectionRandom.forEach((docs, index) => {
		collectionRandom[index] = JSON.stringify(docs);
	});
	document = JSON.stringify(document);

	return { props: { id, document, collectionRandom } };
}

const Works = ({ id, document, collectionRandom }) => {
	const scrollRef = useHorizontalScroll();
	let data = JSON.parse(document);
	let docs = [];
	collectionRandom.forEach((doc) => {
		docs.push(JSON.parse(doc));
	});
	data.content = data.content.replace('\\n', '\n');
	data.title = data.title[0].toUpperCase() + data.title.substring(1);
	data.description = data.description[0].toUpperCase() + data.description.substring(1);
	data.category = data.category[0].toUpperCase() + data.category.substring(1);

	let humanTime;
	Object.keys(data).length > 0 ? (humanTime = new Date(data.timestamp.seconds * 1000).toLocaleDateString()) : '';

	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<NextSeo
				title={`${data.title} - mbahArip`}
				description={`${data.description}`}
				openGraph={{
					url: `https://www.mbaharip.me/posts/${id}`,
					title: `${data.title} - mbahArip`,
					description: `${data.description}`,
					images: [
						{ url: `${data.thumbnail}`, alt: `${data.title}` },
						{ url: 'https://www.mbaharip.me/assets/images/og-image.png', alt: `${data.title}` },
					],
					site_name: 'mbahArip',
				}}
				twitter={{
					handle: '@mbaharip_',
					site: '@mbahArip_',
					cardType: 'summary_large_image',
				}}
			/>
			<main className='flex flex-col flex-1 w-full text-mbaharip-light'>
				{/* Navbar */}
				<Navbar Active={'Works'} />

				{/* Content */}
				{Object.keys(data).length === 0 ? (
					<div className='w-full md:w-screen-lg max-w-screen-lg mx-auto text-center'>
						<span className='font-mono font-bold text-2xl text-mbaharip-light/50 animate-pulse transition-all duration-100'>
							Loading data...
						</span>
					</div>
				) : (
					<div className='w-full md:w-screen-lg max-w-screen-lg mx-auto'>
						<div className='w-full flex flex-col my-8'>
							<span className='font-mono font-bold text-4xl tracking-wide md:tracking-widest mb-4 text-center leading-relaxed'>
								{data.title}
							</span>
							<Divider />
							<div className='w-full flex flex-col md:flex-row mx-auto my-2 gap-2 items-center justify-center bg-zinc-800'>
								<div className='flex items-center justify-center'>
									<span className='text-sm mx-1'>{humanTime}</span>
									<span className='hidden md:block mx-2'>|</span>
									<Link href={`/${data.category.toLowerCase()}`}>
										<a className='w-fit p-1 text-sm bg-zinc-800 font-bold rounded-md hover:bg-zinc-700 transition-all duration-100 mx-1'>
											{data.category}
										</a>
									</Link>
									<span className='hidden md:block mx-2'>|</span>
								</div>
								<div className='flex gap-2 px-2 items-center max-w-full md:max-w-[60%] overflow-x-auto' ref={scrollRef}>
									<span>Tags: </span>
									{data.tags.map((tag) => (
										<Link key={tag} href={`/tags/${tag}`}>
											<a className='w-fit whitespace-nowrap p-1 text-sm bg-zinc-800 font-bold rounded-md hover:bg-zinc-700 transition-all duration-100'>
												{tag}
											</a>
										</Link>
									))}
								</div>
							</div>
							<Markdown Content={data.content} />
						</div>

						<Divider />

						<div className='w-full flex flex-col my-8'>
							<span className='font-mono font-bold text-4xl tracking-wide md:tracking-widest mb-4 mx-auto'>Random Posts</span>
							<div className='max-w-screen-lg grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-2 md:px-8 my-4 mx-auto'>
								{docs.map((doc, index) => (
									<PostCard Data={doc} key={index} />
								))}
							</div>
						</div>
					</div>
				)}
			</main>
			{/* Footer */}
			<Footer />
		</div>
	);
};
export default Works;
