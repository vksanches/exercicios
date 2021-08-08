<template>
    <div>
        <p class="nome">Citações by Vitor</p>
        <p class="versao">Versão 1.2</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #DDD;
        height: 275px;
        width: 275px;
        border-radius: 150px;
    }

    p {
        margin: 0;
    }

    .nome {
        font-size: 1.7rem;
        font-weight: bold;
    }

    .versao {
        font-size: 1.4rem;
    }
</style>
