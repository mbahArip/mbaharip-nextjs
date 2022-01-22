import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';

import 'katex/dist/katex.min.css';

const Markdown = ({ Content }) => {
	return (
		<>
			{Content ? (
				<div className='markdown-body p-3'>
					<ReactMarkdown remarkPlugins={[gfm, remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>
						{Content}
					</ReactMarkdown>
				</div>
			) : (
				<div className='font-mono flex items-center justify-center text-lg min-h-[50vh] opacity-75 text-red-500'>
					Failed to fetch post data!
				</div>
			)}
		</>
	);
};

export default Markdown;
