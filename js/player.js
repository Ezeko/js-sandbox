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
            health = enemy.health - playerStats[1];
            //if enemy is not dead continue
            if (health > 0) {
                enemy.health = health;
                let getEnemyHealth = document.querySelector('#enemy-health');

                getEnemyHealth.innerHTML = `Health ${health}`;

                let enemyStat = this.enemyAttack();
                alert(`Enemy hit ${enemyStat[1]}, Damages made: ${enemyStat[0]}`)
                playerHealth = player.health - enemyStat[1]

                player.health = playerHealth;
                //if player is not dead, continue
                if (playerHealth > 0) {
                    let getPlayerHealth = document.querySelector('#player-health');

                    getPlayerHealth.innerHTML = `Health ${playerHealth}`;
                    

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

                let enemyStat = this.enemyAttack();
    
                alert(`Enemy hit ${enemyStat[1]}, Damages made: ${enemyStat[0]}`)
                health = player.health - enemyStat[1];
                //if player is not dead continue
                if (health > 0) {
                    player.health = health;
                    let getPlayerHealth = document.querySelector('#player-health');
    
                    getPlayerHealth.innerHTML = `Health ${health}`;
    
                    let playerStats = this.playerAttack();
                    alert(`You hit ${playerStats[1]}, Damages made: ${playerStats[0]}`)
                    enemyHealth = enemy.health - playerStats[1]
    
                    enemy.health = enemyHealth;
                    //if enemy is not dead, continue
                    if (enemyHealth > 0) {
                        let getEnemyHealth = document.querySelector('#enemy-health');
    
                        getEnemyHealth.innerHTML = `Health ${enemyHealth}`;
                        
    
                    }else {
                        let getEnemyHealth = document.querySelector('#enemy-health');
    
                        getEnemyHealth.innerHTML = 'Health 0';
    
                    alert('You Win!! Refresh Your browser to play again!!')
                    }
                } else {
                    let getPlayerHealth = document.querySelector('#player-health');
    
                    getPlayerHealth.innerHTML = 'Health 0';
    
                    alert('Opps! You Lose!! Refresh Your browser to play again')
                }
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