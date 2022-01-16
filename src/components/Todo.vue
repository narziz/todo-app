<template>
  <div class="todo">
    <TodoButtonCheckbox :check-state="todo.completed" @check="getCheckState" />
    <span :class="{ 'todo__content': true, 'todo__content--completed': completed }"> 
      {{ todo.text }} 
    </span>
    <TodoButtonDelete :todo-id="todo.id" />
  </div>
</template>

<script>
import TodoButtonCheckbox from '@/components/TodoButtonCheckbox.vue';
import TodoButtonDelete from '@/components/TodoButtonDelete.vue';

export default {
  props: {
    todo: {
      type: Object,
      default: null
    }
  },
  data(){
    return {
      completed: this.todo.completed
    }
  },
  components: {
    TodoButtonCheckbox,
    TodoButtonDelete
  },
  methods: {
    getCheckState(value){
      this.completed = value
    }
  }
}
</script>

<style lang="scss" scoped>
.todo{
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding: 1rem 0;

  &__content{
    flex-grow: 1;
    text-align: left;
    padding-inline: 0.8rem;

    &--completed{
      text-decoration: line-through;
      color: lightgray;
    }
  }

}
</style>