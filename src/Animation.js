export const pageAnimation = {
	
	hidden: {
		y: '100%',
        opacity : 0,
	},
    show: {
		y: 0,
        opacity: 1,
        transition : {duration: .75 , when:'beforeChildren', staggeredChildren : .5},
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


export const titleAni = {
    hidden : {
      opacity: 0, 
      y:100,
    },
    show : {
        opactiy : 1,
        y:0,
        transition: {duration : 1}
    }
}
export const container = {
    hidden : {
        opacity  :0,
        
    },
    show : {
        opacity: 1,
        transition: {duration:1 , when:'beforeChildren'}
    }
}