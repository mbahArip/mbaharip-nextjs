import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css';
import '../styles/markdown-github.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faGithub, faArtstation, faDiscord, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import Loading from '../components/Loading';
import firebase from '../utils/firebase/clientApp';
import { DefaultSeo } from 'next-seo';

library.add(faFacebook, faTwitter, faGithub, faArtstation, faDiscord, faInstagram, faBars, faTimes, faLinkedin, faSearch);

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	const [state, setState] = useState({ isRouteChanging: false, loadingKey: 0 });
	useEffect(() => {
		const handleRouteChangeStart = () => {
			setState((prevState) => ({
				...prevState,
				isRouteChanging: true,
				loadingKey: prevState.loadingKey ^ 1,
			}));
		};

		const handleRouteChangeEnd = () => {
			setState((prevState) => ({
				...prevState,
				isRouteChanging: false,
			}));
		};

		router.events.on('routeChangeStart', handleRouteChangeStart);
		router.events.on('routeChangeComplete', handleRouteChangeEnd);
		router.events.on('routeChangeError', handleRouteChangeEnd);

		return () => {
			router.events.off('routeChangeStart', handleRouteChangeStart);
			router.events.off('routeChangeComplete', handleRouteChangeEnd);
			router.events.off('routeChangeError', handleRouteChangeEnd);
		};
	}, [router.events]);

	return (
		<>
			<DefaultSeo
				title='mbahArip'
				description='Personal website of Arief Rachmawan. I will post all my works and blog here.'
				openGraph={{
					url: 'https://www.mbaharip.me',
					title: 'mbahArip',
					description: 'Personal website of Arief Rachmawan. I will post all my works and blog here.',
					images: [{ url: 'https://www.mbaharip.me/assets/images/og-image.png', alt: `mbahArip` }],
					site_name: 'mbahArip',
				}}
				twitter={{
					handle: '@mbaharip_',
					site: '@mbahArip_',
					cardType: 'summary_large_image',
				}}
			/>
			<Loading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
