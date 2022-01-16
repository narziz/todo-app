<template>
  <div class="todo-add">
    <input v-model="todoText" class="todo-add__input" type="text" placeholder="New Task...">
    <button class="todo-add__button" @click="addTodo()">Add</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      todoText: null
    }
  },
  methods: {
    addTodo(){
      this.$store.dispatch('addTodo', this.todoText)
      this.todoText = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-add{
  display: flex;
  justify-content: space-between;

  &__input{
    width: 87%;
    padding: 0.7rem 1rem;
    border-radius: 5px;
    border: 1px solid lightgray;
  }

  &__button {
    border-radius: 5px;
    padding: 0.7rem 1.5rem;
    border: 1px solid transparent;
    background: #fd1d1d;
    color: #fff;
    cursor: pointer;
  }
}
</style>