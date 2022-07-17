<template>
  <div class="todo__main">
    <top-menu></top-menu>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu.vue';
  export default {
    components: {
      TopMenu,
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
  height: 700px;
  background: #2a3744;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 40px
}
</style>
