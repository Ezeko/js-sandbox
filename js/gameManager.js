let GameManager = {
    setGameStart: function (name) {
        this.resetPlayer(name);
        this.setPreFight();
    },

    resetPlayer: function (name, ) {
        let playerName = name
        switch (name) {
            case 'Player One':
                player = new Player(name, 100, 200, 150, 0, 50)
                break;
            case 'Player Two':
                player = new Player(name, 80, 200, 100, 0, 100);
                break;
            case 'Player Three':
                player = new Player(name, 100, 150, 120, 0, 100);
                break;
        }

        //set page



        //set player
        let playerPage = document.querySelector("#character");
        console.log(name);
        playerPage.innerHTML = '<img src= "/images/players/' + playerName + '.jpeg"> <div id = "players"><h3>' + name + '</h3><h5 id="player-health"> Health: ' + player.health + '</h5><h5> Mana: ' + player.mana + '</h5><h5> Strength: ' + player.strength + '</h5><h5> Agility: ' + player.agility + '</h5><h5> Speed: ' + player.speed + '</h5> </div> ';

    },
    setPreFight: function () {
        let getActionField = document.querySelector('#actions')

        getActionField.innerHTML = '<div onclick = "GameManager.setFight()" > Search for Enemy!</div>';
        getActionField.style.visibility = 'visible';
        //set title
        let titlePage = document.querySelector('#title');

        titlePage.innerHTML = '<h1> Hero Game!!</h1> <h2> Task: Choose an Enemy</h2>';

        let arenaPage = document.querySelector('#arena');

        arenaPage.innerHTML = '<img src="/images/arena.jpeg" id="arena-image">';
    },

    setFight: function () {

        let enemy00 = new Enemy('Goblin', 100, 100, 130, 0, 150);
        let enemy01 = new Enemy('Thanos', 100, 190, 90, 0, 150)

        let randNum = parseInt(Math.random().toFixed())
        //console.log(randNum);
        switch (randNum) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
        }

        //set title
        let titlePage = document.querySelector('#title');

        titlePage.innerHTML = '<h1> Hero Game!!</h1> <h2> Start Game</h2>';

        let getActionField = document.querySelector('#actions')

        getActionField.innerHTML = '<div onclick = "PlayerManagement.playGame()" > Attack!</div>';

        let enemyPage = document.querySelector('#enemy');
        //console.log(enemy);
        enemyPage.innerHTML = '<img src= "/images/enemies/' + enemy.name + '.jpeg"> <div id = "enemies"><h3>' + enemy.name + '</h3><h5 id="enemy-health"> Health: ' + enemy.health + '</h5><h5> Mana: ' + enemy.mana + '</h5><h5> Strength: ' + enemy.strength + '</h5><h5> Agility: ' + enemy.agility + '</h5><h5> Speed: ' + enemy.speed + '</h5> </div>';


    }
}