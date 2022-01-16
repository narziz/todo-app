<template>
  <button class="checkbox" @click="check()">
    <div :class="{ 'checkbox__tick': true, 'checkbox__tick--active': checked }"></div>
  </button>
</template>

<script>
export default {
  props: {
    checkState: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      checked: this.checkState
    }
  },
  methods: {
    check(){
      this.checked = !this.checked
      this.sendValue()
    },
    sendValue(){
      this.$emit('check', this.checked)
    }
  }
}
</script>

<style lang="scss" scoped>

.checkbox{
  border: 1px solid lightgray;
  border-radius: 3px;
  background: white;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &__tick{
    background: white;
    width: 100%;
    height: 100%;
    border-radius: 2px;

    &--active{
      background: #20bf55;
    }
  }
}
</style>