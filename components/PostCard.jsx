import Image from 'next/image';
import Link from 'next/link';

import { useHorizontalScroll } from '../utils/hooks/useHorizontalScroll';

const PostCard = ({ Data }) => {
	Data.title = Data.title[0].toUpperCase() + Data.title.substring(1);
	Data.description = Data.description[0].toUpperCase() + Data.description.substring(1);
	Data.category = Data.category[0].toUpperCase() + Data.category.substring(1);
	const scrollRef = useHorizontalScroll();
	return (
		<Link href={`/posts/${Data.idIndex}`}>
			<a className='group w-full flex md:flex-col bg-zinc-800 hover:bg-zinc-700/50 rounded-xl overflow-hidden hover:scale-105 transition-all duration-100'>
				<Image
					src={Data.thumbnail}
					className='rounded-xl aspect-square transition-all duration-100'
					width={500}
					height={500}
					alt={Data.title}
					objectFit={'cover'}
				/>
				<div className='min-w-[75%] flex flex-col justify-between px-4 md:px-2 py-2 gap-2'>
					<div className='flex flex-col gap-2'>
						<span className='font-mono font-bold text-xl md:text-2xl truncate tracking-wider md:tracking-widest'>{Data.title}</span>
						<span className='text-xs md:text-sm line-clamp-2'>{Data.description}</span>
					</div>
					<div className='w-full h-[1px] bg-zinc-700 hidden md:block' />
					<div className='flex md:flex-col gap-2 items-center md:items-start'>
						<div className='w-fit p-1 text-sm bg-zinc-700 font-bold rounded-md group-hover:bg-zinc-700 transition-all duration-100'>
							{Data.category}
						</div>
						<span className='md:hidden'>|</span>
						<div className='flex gap-2 items-center max-w-full overflow-x-auto' ref={scrollRef}>
							{Data.tags.map((tag, index) => (
								<div
									className='w-fit whitespace-nowrap p-1 text-sm bg-zinc-700 hover:bg-zinc-600 font-bold rounded-md group-hover:bg-zinc-700 transition-all duration-100'
									key={index}
								>
									{tag}
								</div>
							))}
						</div>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default PostCard;
