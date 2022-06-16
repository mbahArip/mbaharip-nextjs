import Document, {Head, Html, Main, NextScript} from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<body className="bg-main-back-dark-0 text-main-light">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;