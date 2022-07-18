<template>
  <div class="todo__main">
    <top-menu />
    <add-task-form />
    <hr>
    <tasks-list 
      :tasks="tasks" 
      @completed="setCompletedTask"
      @remove="removeTask"
    />
  </div>
</template>

<script>
import TopMenu from '@/components/TopMenu.vue';
import AddTaskForm from '@/components/AddTaskForm.vue'
import TasksList from './components/TasksList.vue'
export default {
  components: {
    TopMenu,
    AddTaskForm,
    TasksList
  },
  data() {
    return {
      tasks: [
        {id: 1, description: 'Вынести мусор', completed: false},
        {id: 2, description: 'Помыть посуду', completed: false},
        {id: 3, description: 'Сходить к стоматологу', completed: false},
        {id: 4, description: 'Купить хлеб', completed: false},
        {id: 5, description: 'Полить цветы', completed: true},
        {id: 6, description: 'Купить молоко', completed: true},
      ]
    } 
  },
  methods: {
    setCompletedTask(task) {
      task.completed = !task.completed;
    },
    removeTask(task) {
      this.tasks = this.tasks.filter(el => el.id !== task.id);
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background: rgb(0, 204, 255);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
}
.todo__main{
  margin-top: 20px;
  width: 1000px;
  min-height: 700px;
  background: #2a3744;
  border-radius: 10px;
  padding: 40px
}
</style>
