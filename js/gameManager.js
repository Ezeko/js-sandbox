let GameManager = {
    setGameStart: function (name){
        this.resetPlayer(name);
        //this.setGameStart();
    },

    resetPlayer: function (name){
        let playerName = name
        switch (name) {
            case 'Player One':
                player = new Player(name, 100, 200, 150, 0 , 50)
                break;
            case 'Player Two': 
                player = new Player(name, 80, 200, 100,0, 100);
                break;
            case 'Player Three': 
            player = new Player(name, 100, 190, 200,0, 100);
            break;
        }
        event.preventDefault();
        //set page

        //set title
        let titlePage = document.querySelector('#title');

        titlePage.innerHTML = '<h1> Hero Game!!</h1> <h2> Setting Game!</h2>';
        
        //set player
        let playerPage = document.querySelector("#character");
        console.log(name);
        playerPage.innerHTML = '<img src= "/images/players/' + playerName +'.jpeg"> <div><h3>' + name + '</h3><h5> Health: ' + player.health+'</h5><h5> Mana: '+ player.mana +'</h5><h5> Strength: '+ player.strength+'</h5><h5> Agility: '+ player.agility+ '</h5><h5> Speed: ' + player.speed+'</h5> </div>';
    },
    setPreFight: function (){}
}