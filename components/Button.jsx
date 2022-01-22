import Link from 'next/link';

const Button = ({ Text, Disabled = false, Active = false, Callback = () => {} }) => {
	let opts = {};
	let style =
		'text-mbaharip-light hover:text-mbaharip-hovLight bg-zinc-800/50 hover:bg-zinc-800/25 border-mbaharip-hovDark/50 hover:border-mbaharip-hovDark/75';
	if (Disabled) {
		style =
			'text-mbaharip-light/25 hover:text-mbaharip-light/25 bg-zinc-700/25 hover:bg-zinc-700/25 border-mbaharip-hovDark/50 hover:border-mbaharip-hovDark/75';
		opts['disabled'] = 'disabled';
	}
	if (Active)
		style =
			'text-mbaharip-light hover:text-mbaharip-hovLight bg-zinc-700 hover:bg-zinc-600/50 border-mbaharip-hovDark/75  hover:border-mbaharip-hovDark';
	return (
		<>
			<button
				onClick={Callback}
				className={`text-sm font-mono w-full px-6 py-2 mx-auto rounded-lg border-[1px] tracking-wider transition-all duration-100 ${style}`}
				{...opts}
			>
				{Text}
			</button>
		</>
	);
};

export default Button;
