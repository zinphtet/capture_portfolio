export const pageAnimation = {
	hidden: {
		y: 300,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.2 },
	},
	exit: {
		opacity: 0,
		transition: { duration: 0.5 },
	},
};

export const navlineAnimation = {
	hidden: {
		width: '0%',
		opacity: 0,
	},
	show: {
		width: '100%',
		opacity: 1,
		transition: { duration: 1 },
	},
};

export const titleAni = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5 },
	},
};
export const fade = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: { duration: 0.75, ease: 'easeOut' },
	},
};
export const fade2 = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: { duration: 3},
	},
};
export const zoomAni = {
	hidden: {
		scale: 1.5,
		opacity: 0,
	},
	show: {
		scale: 1,
		opacity: 1,
		transition: { duration: 0.5 },
	},
};

export const WaveAni = {
	hidden: {
		pathLength: 0,
	},
	show: {
		pathLength: 1,
		transition: { duration: 1 },
	},
};

export const LineAni = {
	hidden: {
		width: '0%',
	},
	show: {
		width: '100%',
		transition: { duration: 1 },
	},
};
export const slideAni = {
	hidden: {
		x: '-130%',
		skew: '45deg',
	},
	show: {
		x: '100%',
		skew: '0deg',
        scale: 0,
		transition: { duration: 1 },
	},
};

export const staySameAni = {
	hidden: { x: 0 },
	show: { x: 0 },
};

export const scrollUpAni = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
		transition: { duration: 1 },
	},
};
