export const pageAnimation = {
	
	hidden: {
		y: '100%',
        opacity : 0,
	},
    show: {
		y: 0,
        opacity: 1,
        transition : {duration: .75 },
	},
    exit : {
        y: '100%',
        opacity : 0,
        transition : {duration: .5 },
    }
    
};

export const navlineAnimation = {
    hidden :{
        width:'0%',
        opacity : 0,
    },
    show : {
        width: '100%',
        opacity : 1,
        transition :{duration : 1},
    }
}