import { useRef } from 'react';
import NavigationBar from '../components/Layout/NavigationBar';

const Index = () => {
	const latestPostRef = useRef(null);

	return (
		<>
			<NavigationBar />

			{/* Header	*/}
			<div
				className={`w-screen min-h-screen flex flex-col items-center justify-center relative`}
			>
				<img
					src={`/img/logo/text.svg`}
					alt="logo"
					className="h-12 md:h-24"
				/>
				{/* Scroll */}
				<div
					className={`absolute bottom-4 p-2 flex flex-col justify-center gap-2 select-none cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-75`}
					onPointerDown={() => {
						latestPostRef.current &&
							latestPostRef.current.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
							});
					}}
				>
					<span className={`font-nexus text-sm`}>Scroll</span>
					<img
						src={`/img/arrow-scroll.svg`}
						alt="scroll"
						className="h-4 animate-arrow-bounce"
					/>
				</div>
			</div>

			{/* Latest Post	*/}
			<div
				className={`w-screen min-h-screen flex flex-col items-center justify-center`}
				ref={latestPostRef}
			>
				lorem ipsum dolor sit amet consectetur adipisicing elit.
			</div>
		</>
	);
};

export default Index;
