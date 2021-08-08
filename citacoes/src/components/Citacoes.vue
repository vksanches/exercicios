<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <citacao>
            <h1>{{citacoes[indice].autor}}</h1>
            <p>{{citacoes[indice].texto}}</p>
            <h5>{{citacoes[indice].fonte}}</h5>
        </citacao>
            
    </div>
</template>

<script>
import Citacao from './Citacao.vue'

export default {
    components: {Citacao},

    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Frases...',
                texto: 'Melhor ser chamado de incompetente recebendo uns R$5 mil do que ganhando R$1,500',
                autor: 'Vitor Sanches'
            }, { 
                fonte: 'Pensamento',
                texto: 'Aquele q se diverte enquanto trabalha, vive melhor que aquele que tem que esperar o trabalho acabar',
                autor: 'Clovis de Barros'
            }, {
                fonte: 'Aprendizado?',
                texto: 'Não deixe a faculdade atrapalhar seus estudos',
                autor: 'Grupo de Estudo'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
