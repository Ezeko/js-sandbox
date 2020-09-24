let GameManager = {
    setGameStart: function (name){
        this.resetPlayer(name);
        this.setPreFight();
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

        
        
        //set player
        let playerPage = document.querySelector("#character");
        console.log(name);
        playerPage.innerHTML = '<img src= "/images/players/' + playerName +'.jpeg"> <div id = "players"><h3>' + name + '</h3><h5> Health: ' + player.health+'</h5><h5> Mana: '+ player.mana +'</h5><h5> Strength: '+ player.strength+'</h5><h5> Agility: '+ player.agility+ '</h5><h5> Speed: ' + player.speed+'</h5> </div> <div id ="search" onclick = "GameManager.setFight()" > Search for Enemy</div>';

    },
    setPreFight: function (){

        //set title
        let titlePage = document.querySelector('#title');

        titlePage.innerHTML = '<h1> Hero Game!!</h1> <h2> Task: Choose an Enemy</h2>';

        let arenaPage = document.querySelector('#arena');

        arenaPage.innerHTML = '<img src="/images/arena.jpeg" id="arena-image">';
    },

    setFight: function(){

    }
}