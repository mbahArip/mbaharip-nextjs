import Image from 'next/image';
import Link from 'next/link';

import { useHorizontalScroll } from '../utils/hooks/useHorizontalScroll';

const BlogCard = ({ Data }) => {
	Data.title = Data.title[0].toUpperCase() + Data.title.substring(1);
	Data.description = Data.description[0].toUpperCase() + Data.description.substring(1);
	Data.category = Data.category[0].toUpperCase() + Data.category.substring(1);
	let humanTime = new Date(Data.timestamp.seconds * 1000).toLocaleDateString();
	const scrollRef = useHorizontalScroll();
	return (
		<Link href={`/posts/${Data.idIndex}`}>
			<a className='group w-full max-h-32 flex bg-zinc-800 hover:bg-zinc-700/50 rounded-xl overflow-hidden'>
				<Image
					src={Data.thumbnail}
					className='rounded-xl aspect-square transition-all duration-100'
					width={250}
					height={250}
					alt={Data.title}
					objectFit={'cover'}
				/>
				<div className='min-w-[75%] max-w-[75%] flex flex-col justify-center px-4 md:px-4 py-2 gap-2'>
					<div className='flex items-center justify-between h-[35%]'>
						<span className='font-mono font-bold text-2xl md:text-3xl truncate max-w-[80%] tracking-wider md:tracking-widest'>
							{Data.title}
						</span>
						<span className='text-xs'>{humanTime}</span>
					</div>
					<span className='text-xs md:text-sm line-clamp-3 h-[50%]'>{Data.description}</span>
				</div>
			</a>
		</Link>
	);
};

export default BlogCard;
