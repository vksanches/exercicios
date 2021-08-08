<template>
    <div 
        @click="$emit('taskStateChanged', task)"
        class="task" :class="stateClass">
        <span @click.stop="$emit('taskDeleted', task)" class="close">x</span>
        <p> {{ task.name}}</p>
    </div>

</template>

<script>
export default {
    props:{
        task:{type: Object, required:true }
    },
    computed :{
        stateClass() {
            return{
                pending:this.task.pending,
                done:!this.task.pending
            }
        }
    }

}
</script>

<style>
.task {
    position: relative;
    box-sizing: border-box;
    width: 350px;
    height: 150px;
    padding: 10px;
    border-radius: 8px;
    font-size: 2rem;
    font-weight: 300;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pending {
    border-left: 12px solid rgb(73, 19, 19);
    background-color: rgb(129, 35, 35);

}

.done {
    color:rgb(253, 250, 250);
    border-left: 12px solid rgb(10, 49, 10);
    background-color: rgb(14, 59, 37);
    text-decoration: line-through;
}

.pending .close {
    background-color: #B73229;

}

.done .close{
    background-color: #0A8f08;
}

.close{
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    display:flex;
    justify-content: center;
}
</style>