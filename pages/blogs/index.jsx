import { useEffect, useState } from 'react';
import * as firestore from '../../utils/firebase/firestore';
import ReactPaginate from 'react-paginate';
import { isMobile } from 'react-device-detect';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Divider from '../../components/Divider';
import BlogCard from '../../components/BlogCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextSeo } from 'next-seo';

const Works = () => {
	const [data, setData] = useState(null);
	const [searchQuery, setSearchQuery] = useState('');
	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	let itemsPerPage;
	isMobile ? (itemsPerPage = 4) : (itemsPerPage = 6);

	useEffect(() => {
		async function fetchData() {
			let d = await firestore.readCollection('posts', 'idIndex');
			d = d.filter((post) => {
				return post.category.toLowerCase() == 'blogs';
			});
			setData(d);

			const endOffset = itemOffset + itemsPerPage;
			setCurrentItems(d.slice(itemOffset, endOffset));
			setPageCount(Math.ceil(d.length / itemsPerPage));
		}
		fetchData();
	}, [itemOffset, itemsPerPage]);

	function handleChangePage(event) {
		const newOffset = (event.selected * itemsPerPage) % data.length;
		setItemOffset(newOffset);
	}

	function handleSearchForm(e) {
		e.preventDefault();
	}
	function handleSearchInput(e) {
		const query = e.target.value;
		setSearchQuery(query);
		if (query.length) {
			let filterData = data.filter((post) => {
				if (post.title.toLowerCase().includes(query) || post.description.toLowerCase().includes(query) || post.tags.indexOf(query) > -1) {
					return post;
				}
			});
			setCurrentItems(filterData);
		} else {
			setItemOffset(0);
			const endOffset = itemOffset + itemsPerPage;
			setCurrentItems(data.slice(itemOffset, endOffset));
		}
	}
	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<NextSeo title='Blogs - mbahArip' />

			<main className='flex flex-col flex-1 w-full text-mbaharip-light'>
				{/* Navbar */}
				<Navbar Active={'Blogs'} />

				{/* Content */}
				<div className='w-full md:w-screen-lg max-w-screen-lg mx-auto flex flex-col justify-between'>
					{/* Title and Filter */}
					<div className='w-full my-8 flex flex-col items-center justify-center'>
						<span className='font-mono font-bold text-4xl  tracking-wide md:tracking-widest'>Blog Posts</span>
						<div className='mb-8'>
							<form
								className='flex justify-center min-w-full w-screen max-w-screen-md px-8 md:px-16 mt-8'
								onSubmit={(e) => {
									handleSearchForm(e);
								}}
							>
								<input
									type='text'
									placeholder='Search'
									className='w-full px-2 py-1 placeholder:text-mbaharip-light/50 bg-zinc-900 border-[1px] border-mbaharip-light/25 rounded-l-lg focus:border-mbaharip-hovLight/50 focus:outline-none'
									onChange={(e) => handleSearchInput(e)}
								/>
								<button
									type='submit'
									className='px-2 py-1 bg-zinc-800 hover:bg-zinc-700 border-[1px] border-zinc-800 hover:border-zinc-700 rounded-r-lg transition-color duration-100'
								>
									<FontAwesomeIcon icon={('fas', 'search')} />
								</button>
							</form>
						</div>

						{/* Divider */}
						<Divider />
					</div>

					{/* Posts List */}
					{/* Add loading here */}
					{currentItems ? (
						<>
							{/* Posts List */}
							<div className='grid grid-cols-1 gap-6 mx-4 md:mx-16 my-8'>
								{currentItems.map((d, index) => (
									<BlogCard Data={d} key={index} />
								))}
							</div>
							{/* Pagination */}
							<div className='w-full flex justify-center my-8'>
								{searchQuery == '' ? (
									<ReactPaginate
										breakLabel={'...'}
										nextLabel={'>'}
										onPageChange={handleChangePage}
										pageRangeDisplayed={1}
										pageCount={pageCount}
										previousLabel={'<'}
										renderOnZeroPageCount={null}
										className='w-fit flex gap-1 justify-center items-center bg-zinc-800 rounded-xl font-mono p-1 px-0'
										pageLinkClassName='bg-zinc-800 hover:bg-zinc-700/50 p-2 px-4 rounded-xl'
										activeLinkClassName='bg-zinc-700 text-white font-bold'
										nextLinkClassName='bg-zinc-800 hover:bg-zinc-700/50 p-2 px-4 rounded-xl'
										previousLinkClassName='bg-zinc-800 hover:bg-zinc-700/50 p-2 px-4 rounded-xl'
									/>
								) : (
									<></>
								)}
							</div>
						</>
					) : (
						<div className='grid grid-cols-1 gap-6 mx-4 my-8 place-items-center font-mono text-2xl animate-pulse'>Loading data...</div>
					)}
				</div>
			</main>
			{/* Footer */}
			<Footer />
		</div>
	);
};

export default Works;
