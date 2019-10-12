new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        playerHealth: 100,
        monsterHealth: 100,
        playerDamage: 0,
        monsterDamage: 0,
        turns: [],
    
    },
    methods: {
        resetGame: function() {
            this.gameStarted = false
            this.playerHealth = 100
            this.monsterHealth = 100
            this.turns = []
},
        attack: function () {
        this.playerDamage =Math.floor((Math.random() * 10) + 1)
        this.monsterHealth -= this.playerDamage
        this.turns.unshift({
            isPlayer: true,
            text: 'Player hits Monster for ' + this.playerDamage
        })
        this.monsterAttack();
        this.checkForWinner()

},
        specialAttack: function () {
        this.playerDamage = Math.floor(Math.random() * (10 - 5) ) + 5;
        this.monsterHealth -= this.playerDamage
        this.turns.unshift({
            isPlayer: true,
            text: 'Player hits Monster for ' + this.playerDamage
        })
        this.monsterAttack()
        this.checkForWinner()
    },
    monsterAttack: function() {
        this.monsterDamage =Math.floor((Math.random() * 10) + 1)
        this.playerHealth -= this.monsterDamage
        this.turns.unshift({
            isPlayer: false,
            text: 'Monster hits Player for ' + this.monsterDamage
        })
    },
    heal: function() {
        let heal = Math.floor((Math.random() * 10) + 1)
        if(this.playerHealth + heal > 100) {
            this.playerHealth = 100
        } else {
            this.playerHealth += heal
        }
        this.turns.unshift({
            isPlayer: true,
            text: 'Player healed for ' + heal
        })
        this.monsterAttack()
        this.checkForWinner()
    },
    checkForWinner: function() {
        if(this.playerHealth <= 0) {
            alert('The Monster has defeated you!')
            this.resetGame()
        }
        if(this.monsterHealth <= 0) {
            alert("You've defeated the Monster!")
            this.resetGame()

        }
    }
}

})