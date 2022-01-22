import { useNProgress } from '@tanem/react-nprogress';

const Loading = ({ isRouteChanging }) => {
	const { animationDuration, isFinished, progress } = useNProgress({ isAnimating: isRouteChanging });

	return (
		<>
			<style jsx>{`
				.container {
					opacity: ${isFinished ? 0 : 1};
					pointerevents: none;
					// transition: opacity ${animationDuration}ms linear;
				}

				.bar {
					background: #b3b2b3a0;
					height: 1px;
					left: 0;
					margin-left: ${(-1 + progress) * 100}%;
					position: fixed;
					top: 0;
					transition: margin-left ${animationDuration}ms ease;
					width: 100%;
					z-index: 1031;
				}
			`}</style>

			<div className='container'>
				<div className='bar'></div>
			</div>
		</>
	);
};

export default Loading;
