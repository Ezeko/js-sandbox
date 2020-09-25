let player;

function Player(name, health, speed, agility, mana, strength) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.agility = agility;
    this.mana = mana;
    this.strength = strength
}

PlayerManagement = {
    play: function () {
        //determine who to play first
        if (player.speed >= enemy.speed) {
            let playerStats = this.playerAttack();

            alert(`You hit ${playerStats[1]}, Damages made: ${playerStats[0]}`)
            enemy.health = enemy.health - playerStats[1];
            //if enemy is not dead continue
            if (enemy.health > 0) {
                let getEnemyHealth = document.querySelector('#enemy-health');

                getEnemyHealth.innerHTML = `Health ${enemy.health - playerStats[1]}`;

                let enemyStat = this.enemyAttack();
                alert(`Enemy hit ${enemyStat[1]}, Damages made: ${enemyStat[0]}`)
                player.health = player.health - enemyStat[1]
                //if player is not dead, continue
                if ((player.health - enemyStat[1]) > 0) {
                    let getPlayerHealth = document.querySelector('#player-health');

                    getPlayerHealth.innerHTML = `Health ${player.health - enemyStat[1]}`;
                    

                }else {
                    let getPlayerHealth = document.querySelector('#player-health');

                    getPlayerHealth.innerHTML = 'Health 0';

                alert('Opps!!! You Lose!! Refresh Your browser to play again')
                }
            } else {
                let getEnemyHealth = document.querySelector('#enemy-health');

                getEnemyHealth.innerHTML = 'Health 0';

                alert('You win!! Refresh Your browser to play again')
            }


        } else {
            //enemy to play first
        }

    },
    playerAttack: function () {
        //this method handles all players attacking mode and returns number of hits and number of attacks
        let numberOfFatality = (player.speed * player.agility) / 1000
        let numberOfHits = Math.abs(Math.floor((player.health - numberOfFatality) / 10) * Math.floor(Math.random() * 10)) + 1;
        let numberOfDamages = Math.floor(Math.random() * 10) + 1;
        return playerAccessment = [numberOfDamages, numberOfHits];
    },
    enemyAttack: function () {
        //this method handles all enemies attacking mode and returns number of hits and number of attacks

        let numberOfFatality = (enemy.speed * enemy.agility) / 1000
        let numberOfHits = Math.abs(Math.floor((player.health - numberOfFatality) / 10) * Math.floor(Math.random() * 10)) + 1;
        let numberOfDamages = Math.floor(Math.random() * 10) + 1;
        return enemyAccessment = [numberOfDamages, numberOfHits];
    },

}