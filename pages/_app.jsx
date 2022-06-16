import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<DefaultSeo
				titleTemplate={'%s :: mbahArip'}
				defaultTitle={'mbahArip'}
				description={
					'Portfolio site of mbahArip. A web developer and 3D Modeler.'
				}
				twitter={{
					handle: '@mbahArip_',
					cardType: 'summary_large_image',
				}}
				openGraph={{
					url: 'https://www.mbaharip.me',
					type: 'website',
					title: 'mbahArip',
					description:
						'Portfolio site of mbahArip. A web developer and 3D Modeler.',
					site_name: 'mbahArip',
					images: [
						{
							url: 'https://www.mbaharip.me/img/opengraph.png',
							alt: 'mbahArip',
						},
					],
				}}
				facebook={{
					appId: '221244830002460',
				}}
			/>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
