<template>
  <div class="todo-app">
    <TodoAdd />
    <TodoBody />
  </div>
</template>

<script>
import TodoAdd from '@/components/TodoAdd.vue'
import TodoBody from '@/components/TodoBody.vue'

export default {
  components: {
    TodoAdd,
    TodoBody
  }
}
</script>

<style lang="scss" scoped>
.todo-app{
  width: 100%;
  background: #fff;
  border-radius: 5px;
  padding: 2rem 1rem;
}

@media (min-width: 768px){
  .todo-app{
    width: 50%;
    padding: 2rem;
  }
}
</style>