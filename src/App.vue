<template>
  <div class="todo__main">
    <top-menu :tasks="tasks" @setCompleted="sortedTasks"/>
    <add-task-form @create="createTask"/>
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
        {id: 1, description: 'Вынести мусор', completed: false, show: true},
        {id: 2, description: 'Помыть посуду', completed: false, show: true},
        {id: 3, description: 'Сходить к стоматологу', completed: false, show: true},
        {id: 4, description: 'Купить хлеб', completed: false, show: true},
        {id: 5, description: 'Полить цветы', completed: true, show: true},
        {id: 6, description: 'Купить молоко', completed: true, show: true},
      ]
    } 
  },
  methods: {
    setCompletedTask(task) {
      task.completed = !task.completed;
    },
    removeTask(task) {
      this.tasks = this.tasks.filter(el => el.id !== task.id);
    },
    createTask(task) {
      this.tasks.push(task)
    },
    sortedTasks(sort){
      this.tasks.forEach(task => {
        if(sort === 'incomplete'){
          task.completed ? task.show = false : task.show = true;
        }
        if(sort === 'complete'){
          task.completed ? task.show = true : task.show = false;
        }
      })
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
