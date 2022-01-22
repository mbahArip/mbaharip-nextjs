import { useRef, useState } from 'react';
import Link from 'next/link';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Divider from '../components/Divider';
import Button from '../components/Button';
import Slider from 'react-slick';
import slider from 'react-slick/lib/slider';
import { NextSeo } from 'next-seo';

const Services = () => {
	const [imageIndex3d, setImageIndex3d] = useState(0);
	const [imageIndexDesign, setImageIndexDesign] = useState(0);
	const [imageIndexRedraw, setimageIndexRedraw] = useState(0);
	const [showImage, setShowImage] = useState(false);
	const [imageSrc, setImageSrc] = useState('/og-fallback.png');
	const images3D = ['/img/kit-180sx-garagemak-hi.jpg', '/img/kit-s13-cmw-hi.jpg', '/img/kit-gt86-abflug-hi.jpg'];
	const imagesDesign = ['/img/livery-yukina-hi.jpg', '/img/livery-rize-hi.jpg', '/img/livery-marisa-hi.jpg'];
	const imagesRedraw = ['/img/redraw-asuka-hi.jpg', '/img/redraw-ryuuko-hi.jpg', '/img/redraw-triadprimus-hi.jpg'];

	const sliderSettings = {
		accessibility: true,
		autoplay: true,
		autoplaySpeed: 10000,
		arrows: true,
		dots: true,
		swipe: false,
		appendDots: (dots) => (
			<div>
				<button className='w-fit invert scale-125'>{dots}</button>
			</div>
		),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					swipe: true,
				},
			},
		],
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<NextSeo title='Services' />

			<div
				className={`${
					showImage ? 'flex' : 'hidden '
				} flex-col items-center justify-center fixed top-0 left-0 w-screen h-screen bg-zinc-900/75 z-[1010] backdrop-blur-sm`}
				onClick={() => {
					setShowImage(false);
				}}
			>
				<div className='max-w-[95%] md:max-w-[75%] flex flex-col items-center'>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img className='rounded-xl' src={imageSrc} alt='image details' />
					<span className='fixed bottom-10 font-mono text-mbaharip-light text-sm md:text-base'>Click anywhere to close</span>
				</div>
			</div>

			<main className='flex flex-col flex-1 w-full text-mbaharip-light justify-between'>
				{/* Navbar */}
				<Navbar Active={'Services'} />

				{/* Content */}
				<div className='max-w-screen-lg min-h-screen mx-auto'>
					{/* Title */}
					<div className='w-full my-8 flex flex-col items-center'>
						<span className='font-mono font-bold text-4xl tracking-wide md:tracking-widest mb-8'>Services</span>
						<p className='w-full text-center text-lg md:text-2xl px-4'>
							I&apos;m accepting any request for 3D work, design, and image or logo redraw. <br />
							<span className='text-sm md:text-base opacity-50 font-bold'>
								*Client are responsible for the copyright of the images nor logo used.
							</span>
						</p>
					</div>

					<Divider />

					{/* Slider */}
					<div className='my-4 flex justify-center items-center'>
						<Slider {...sliderSettings} className='max-w-sm md:max-w-2xl px-2 py-0 mx-auto'>
							{/* 3D Works */}
							<div className='px-4'>
								<div className='w-full my-4 flex flex-col items-center'>
									{/* Title */}
									<span className='font-mono font-bold text-3xl tracking-wide md:tracking-widest mb-4'>3D Works</span>

									{/* Sample Image */}
									<div className='flex flex-col items-center max-w-sm md:max-w-2xl rounded-xl overflow-hidden'>
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											src={images3D[imageIndex3d]}
											className='cursor-pointer'
											alt='180sx Garage Mak'
											onClick={() => {
												setImageSrc(images3D[imageIndex3d]);
												setShowImage(true);
											}}
										/>
										<div className='grid grid-cols-3 justify-center'>
											{images3D.map((image, index) => (
												// eslint-disable-next-line @next/next/no-img-element
												<img
													src={image}
													className={`cursor-pointer ${
														imageIndex3d == index ? 'opacity-100' : 'opacity-50'
													} transition-opacity duration-100`}
													alt='180sx Garage Mak'
													onClick={() => {
														setImageIndex3d(index);
													}}
													key={index}
												/>
											))}
										</div>
									</div>

									{/* Description */}
									<p className='w-full max-w-lg text-center text-base md:text-lg px-4 my-4'>
										I can help you to create 3D models of Car bodykit, Car parts, and Environment props. <br />
										<span className='text-xs md:text-sm opacity-50 font-bold'>
											*I may decline your commission if the models are too complex.
										</span>{' '}
										<br />
									</p>

									{/* Button */}
									<Link href={'/works'}>
										<a>
											<Button Text={'More 3D works sample'} />
										</a>
									</Link>
								</div>
							</div>

							{/* Design Works */}
							<div className='px-4'>
								<div className='w-full my-4 flex flex-col items-center'>
									{/* Title */}
									<span className='font-mono font-bold text-3xl tracking-wide md:tracking-widest mb-4'>Design</span>

									{/* Sample Image */}
									<div className='flex flex-col items-center max-w-sm md:max-w-2xl rounded-xl overflow-hidden'>
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											src={imagesDesign[imageIndexDesign]}
											className='cursor-pointer'
											alt='180sx Garage Mak'
											onClick={() => {
												setImageSrc(imagesDesign[imageIndexDesign]);
												setShowImage(true);
											}}
										/>
										<div className='grid grid-cols-3 justify-center'>
											{imagesDesign.map((image, index) => (
												// eslint-disable-next-line @next/next/no-img-element
												<img
													src={image}
													className={`cursor-pointer ${
														imageIndexDesign == index ? 'opacity-100' : 'opacity-50'
													} transition-opacity duration-100`}
													alt='180sx Garage Mak'
													onClick={() => {
														setImageIndexDesign(index);
													}}
													key={index}
												/>
											))}
										</div>
									</div>

									{/* Description */}
									<p className='w-full max-w-lg text-center text-base md:text-lg px-4 my-4'>
										I can help you to create your dream design. <br />
										I&apos;m accepting request for Car wrap, Motorbike wrap, PC case wrap, or other object. <br />
										<span className='text-xs md:text-sm opacity-50 font-bold'>
											*I may decline your commission if the request are too complex.
										</span>
									</p>

									{/* Button */}
									<Link href={'/works'}>
										<a>
											<Button Text={'More Design sample'} />
										</a>
									</Link>
								</div>
							</div>

							{/* Redraw Works */}
							<div className='px-4'>
								<div className='w-full my-4 flex flex-col items-center'>
									{/* Title */}
									<span className='font-mono font-bold text-3xl tracking-wide md:tracking-widest mb-4'>Redraw Image</span>

									{/* Sample Image */}
									<div className='flex flex-col items-center max-w-sm md:max-w-2xl rounded-xl overflow-hidden'>
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											src={imagesRedraw[imageIndexRedraw]}
											className='cursor-pointer'
											alt='180sx Garage Mak'
											onClick={() => {
												setImageSrc(imagesRedraw[imageIndexRedraw]);
												setShowImage(true);
											}}
										/>
										<div className='grid grid-cols-3 justify-center'>
											{imagesRedraw.map((image, index) => (
												// eslint-disable-next-line @next/next/no-img-element
												<img
													src={image}
													className={`cursor-pointer ${
														imageIndexRedraw == index ? 'opacity-100' : 'opacity-50'
													} transition-opacity duration-100`}
													alt='180sx Garage Mak'
													onClick={() => {
														setimageIndexRedraw(index);
													}}
													key={index}
												/>
											))}
										</div>
									</div>

									{/* Description */}
									<p className='w-full max-w-lg text-center text-base md:text-lg px-4 my-4'>
										I can help you to redraw the logo or character illustration you provide, so you don&apos;t need to worry about
										pixelation when printing. <br />
										I usually redraw the material up to 10k px 300dpi <br />
										I recommend to redraw the material for your wrap design for better result. <br />
										<span className='text-xs md:text-sm opacity-50 font-bold'>
											*I may decline your commission if the source image are too complex or small.
										</span>
									</p>
								</div>
							</div>
						</Slider>
					</div>

					{/* Contact */}
					<div className='text-lg md:text-2xl text-center my-16'>
						If you interested with my work, you can contact me on{' '}
						<Link href={'https://www.mbaharip.me/discord'}>
							<a className='font-bold tracking-wider md:tracking-widest text-base md:text-xl font-mono underline underline-offset-2 hover:text-mbaharip-hovLight transition-colors duration-100'>
								Discord Server
							</a>
						</Link>{' '}
						or{' '}
						<Link href={'mailto:support@mbaharip.me'}>
							<a className='font-bold tracking-wider md:tracking-widest text-base md:text-xl font-mono underline underline-offset-2 hover:text-mbaharip-hovLight transition-colors duration-100'>
								Email
							</a>
						</Link>
					</div>
				</div>

				{/* Footer */}
				<Footer />
			</main>
		</div>
	);
};

export default Services;
