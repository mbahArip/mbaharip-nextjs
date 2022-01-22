const Footer = () => {
	const currentYear = new Date().getFullYear();

	return <div className='bg-zinc-900 text-mbaharip-light text-xs md:text-lg text-center py-2 '>© {currentYear} mbahArip. All Rights Reserved.</div>;
};

export default Footer;
