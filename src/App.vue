<template>
  <TodoApp />
</template>

<script>
import TodoApp from '@/components/TodoApp.vue'

export default {
  
  name: 'App',
  components: {
    TodoApp
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 0 1rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #833ab4; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #833ab4, #fd1d1d, #fcb045); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
