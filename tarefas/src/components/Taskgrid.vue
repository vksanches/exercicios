<template>
    <div class="task-grid">
        <template v-if="tasks.length">
            <task v-for="(task, i) in tasks" :key="task.name"
            @taskDeleted="$emit('taskDeleted', i)"
            @taskStateChanged="$emit('taskStateChanged', i)"
             :task="task"></task>
        </template>
        <p  v-else class="no-task">Vc não tem Tarefas...Vc é Incrível...</p>
    </div>
</template>

<script>
import Task from '/home/vitor/Área de Trabalho/curso_Vue/tarefas/src/components/Task.vue'

export default {
  components: { Task },
    props: {
        tasks:{ type: Array, required: true}
    }
}
</script>

<style>
.task-grid { 
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.task-grid .task{
margin: 10px;
}

.no-task{
    color: #AAA;
    font-size: 2.5rem;
}

</style>