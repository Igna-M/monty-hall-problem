const game = {
    randomDoor: () => {
        return Math.floor(Math.random() * 3) + 1;
        
    },
    
    randomBool: () => {
        return Math.floor(Math.random() * 2) + 1;
    },


    wait: ()=> {
        var d = new Date();
        var d2 = null;
        do { d2 = new Date(); }
        while(d2-d < 3000);
    }
}

export default game;