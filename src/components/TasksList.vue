<template>
    <ul>
        <task-item /> 
        <task-item /> 
        <task-item /> 
        <task-item /> 
    </ul>
</template>

<script>
import TaskItem from './UI/TaskItem.vue'
export default {
  components: { TaskItem },

}
</script>

<style scoped>
ul {
    list-style: none;
}

</style>