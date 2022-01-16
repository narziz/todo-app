<template>
  <div class="todo-body">
    <div v-if="todos.length > 0">
      <Todo v-for="(todo, i) in todos" :key="i" :todo="todo" />
    </div>
    <div v-else>
      <p class="todo-body__empty"> Add something to do... </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Todo from '@/components/Todo.vue';

export default {
  components: {
    Todo
  },
  computed: {
    ...mapState({
      todos: 'todos'
    }),
  },
}
</script>

<style lang="scss" scoped>
.todo-body{
  border-top: 1px solid lightgray;
  max-height: 20rem;
  overflow: auto;
  margin-top: 2rem;

  &__empty{
    margin-top: 2rem;
  }
}
</style>