new Vue({
    el: '#app',
    data: {
        playerLife: 0,
        monsterlife: 10,
        running:false,
        logs:[]
    },
    computed:{
        hasResult () {
            return this.playerLife ==0 || this.monsterlife == 0
        }

    },
    methods:{
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterlife = 100
            this.logs=[]
        },
        atk(fatk){
            this.hurt('playerLife',7,12, false, 'Monstro', 'Desafiante', 'player')
            if(this.monsterlife > 0) {
            this.hurt('monsterlife',5,10, fatk, 'Desafiante', 'Monstro', 'monster')
            }
    },
        hurt(atr,min,max, fatk, source, target,cls){
            const plus = fatk ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)

        },
        getRandom(min, max) {
            const value = Math.random() * (max-min) + min
            return Math.round(value)

        },
        heal(min, max){
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`Desafiante ganhou força de ${heal}.`, 'player')
        },
        healandhurt(){
            this.heal(10,15)
            this.hurt('playerLife', 7,12,false, 'Monstro', 'Desafiante', 'monster')
        },
        registerLog(text,cls) {
            this.logs.unshift({text, cls})
        }

    },
    watch:{
    
        hasResult(value) {
            if (value) this.running = false
        }
    }

})