import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel='icon' href='/favicon.ico' />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300;400;500&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Zen+Antique+Soft&display=swap'
					/>
				</Head>
				<body className='bg-zinc-900 text-zinc-100 '>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
