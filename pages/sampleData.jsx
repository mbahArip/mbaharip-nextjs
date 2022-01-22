export const sampleWorks = {
	title: '',
	description: '',
	category: '',
	metadata: {
		date: '',
		tags: [],
		gdriveAlbum: '',
		thumbnail: '',
	},
	images: [],
	urls: [
		{ name: '', url: '' },
		{ name: '', url: '' },
	],
};
export const sampleResources = {
	title: '',
	titleJp: '',
	category: '',
	status: '',
	download: '',
	metadata: {
		date: '',
		tags: [],
		gdriveAlbum: '',
		thumb: '',
	},
};
export const sampleBlog = {
	title: '',
	description: '',
	category: '',
	metadata: {
		date: '',
		tags: '',
	},
	markdown: '',
};
let tags = [
	'lorem',
	'ipsum',
	'dolor',
	'sit',
	'amet',
	'consectetur',
	'adipisicing',
	'elit',
	'accusamus',
	'voluptatum',
	'quae',
	'tempora',
	'voluptate',
	'nisi',
	'eligendi',
];

export const getWork = (index) => {
	return {
		title: `Works ${index}`,
		description: `Works ${index} description`,
		category: 'Works',
		metadata: {
			date: 1578472471 + Math.floor(Math.random() * 1000000),
			tags: tags,
			gdriveAlbum: '123456',
			thumbnail: 'og-fallback.png',
		},
		images: ['1.png', '2.png', '3.png'],
		urls: [
			{ name: 'facebook', url: 'https://www.facebook.com' },
			{ name: 'github', url: 'https://www.github.com' },
		],
	};
};

export const getBlog = (index) => {
	return {
		title: `Blog Post ${index}`,
		description: `Blog Post ${index} description`,
		category: 'Blogs',
		metadata: {
			date: 1578472471 + Math.floor(Math.random() * 1000000),
			tags: tags,
		},
		markdown: '# Lorem ipsum dolor sit amet.',
	};
};

export const getResource = (index) => {
	return {
		title: `Resources ${index}`,
		titleJp: `リソース ${index}`,
		category: 'Resources',
		status: 'free',
		download: 'https://drive.mbaharip.me/',
		metadata: {
			date: 1578472471 + Math.floor(Math.random() * 1000000),
			tags: tags,
			gdriveAlbum: '123456',
			thumbnail: 'og-fallback.png',
		},
	};
};
