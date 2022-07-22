<template>
  <form @submit.prevent>
    <input 
      type="text" 
      placeholder="Enter a task..."
      v-model="task.description"
    >
    <button @click="createTask">Add Task</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: {
        description: '',
        completed: false,
      }
    }
  },
  methods: {
    createTask () {
      this.task.id = Date.now();
      this.task.show = true;
      this.$emit('create', this.task)
      this.task = {
        description: '',
        completed: false,
      }
    }
  }
}
</script>

<style scoped>

form{
  margin-bottom: 40px;
}

input {
    min-width: 400px;
    padding: 15px 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
}

button {
    font-size: 16px;
    padding: 15px 10px;
    background: rgb(0, 204, 255);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s;
}
button:hover {
    background: rgb(0, 119, 255);
}
</style>