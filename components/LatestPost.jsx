import Image from 'next/image';
import Link from 'next/link';
import { useHorizontalScroll } from '../components/hooks/useHorizontalScroll';

const LatestPost = ({ Data }) => {
	Data.title = Data.title[0].toUpperCase() + Data.title.substring(1);
	Data.description = Data.description[0].toUpperCase() + Data.description.substring(1);
	Data.category = Data.category[0].toUpperCase() + Data.category.substring(1);
	let humanTime = new Date(Data.timestamp.seconds * 1000).toLocaleDateString();
	const scrollRef = useHorizontalScroll();

	return (
		<div className='flex flex-col-reverse'>
			<div className='flex flex-col bg-zinc-800/50 rounded-b-xl'>
				<div className='px-3 py-1 m-1 flex gap-2 items-center'>
					<Link href={`/${Data.category.toLowerCase()}`}>
						<a className='w-fit px-2 py-1 text-sm bg-zinc-800 font-bold rounded-md hover:bg-zinc-700 transition-all duration-100'>
							{Data.category}
						</a>
					</Link>
					|
					<div className='flex gap-2 items-center max-w-full overflow-x-auto px-2 py-1' ref={scrollRef}>
						{Data['tags'].map((tag, index) => {
							return (
								<Link href={`/tags/${tag}`} key={index}>
									<a className='w-fit whitespace-nowrap p-1 text-sm bg-zinc-800 font-bold rounded-md hover:bg-zinc-700 transition-all duration-100'>
										{tag}
									</a>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
			<Link passHref href={`/posts/${encodeURIComponent(Data.idIndex)}`}>
				<a className='w-full max-h-24 bg-zinc-800 hover:bg-zinc-700 rounded-t-xl flex items-center overflow-hidden transition-all duration-100'>
					<Image
						className='aspect-square'
						src={Data.thumbnail ? Data.thumbnail : '/og-fallback.png'}
						width={'100%'}
						height={'100%'}
						objectFit='cover'
						objectPosition={'center'}
						alt={Data.title}
					/>
					<div className='w-full px-4 py-2 '>
						<div className='flex justify-between items-center'>
							<span className='font-mono font-bold text-xl'>{Data.title}</span>
							<span className='text-xs'>{humanTime}</span>
						</div>
						{/* <span className='line-clamp-2 text-sm md:text-md my-2'>{Data.description}</span> */}
					</div>
				</a>
			</Link>
		</div>
	);
};

export default LatestPost;
