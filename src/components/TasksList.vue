<template>
    <ul>
        <task-item 
            v-for="task in tasks" 
            :key="task.id"
            :task="task"
        /> 
    </ul>
</template>

<script>
import TaskItem from './UI/TaskItem.vue'
export default {
    components: { TaskItem },
    props: {
        tasks : {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
}

</style>