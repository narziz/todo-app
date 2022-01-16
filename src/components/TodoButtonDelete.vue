<template>
  <button class="delete" @click="deleteTodo()"></button>
</template>

<script>
export default {
  props: {
    todoId: {
      type: Number,
      default: null
    }
  },
  methods: {
    deleteTodo(){
      this.$store.dispatch('deleteTodo', this.todoId)
    }
  }
}
</script>

<style lang="scss" scoped>
.delete{
  border: none;
  background: none;
  position: relative;
  height: 1.3rem;
  width: 1.3rem;
  cursor: pointer;

  &::before{
    content: '';
    width: 0.2rem;
    height: 100%;
    top: 0;
    background: #fd1d1d;
    position: absolute;
    transform: rotate(-45deg);
    border-radius: 2px;
  }

  &::after{
    content: '';
    width: 0.2rem;
    height: 100%;
    top: 0;
    background: #fd1d1d;
    position: absolute;
    transform: rotate(45deg);
    border-radius: 2px;
  }
}
</style>