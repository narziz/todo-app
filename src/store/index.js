import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        text: 'Todo 1',
        completed: false
      },
      {
        id: 2,
        text: 'Todo 2',
        completed: true
      },
      {
        id: 3,
        text: 'Todo 3',
        completed: false
      },
      {
        id: 4,
        text: 'Todo 4',
        completed: true
      },
    ],
    filteredTodos: null
  },

  mutations: {
    addTodo(state, text){
      state.todos.push({
        id: state.todos.length + 1,
        text: text,
        completed: false
      })
    },

    deleteTodo(state, id){
      state.todos = state.todos.filter(todo => todo.id !== id)
    }
  },
  actions: {
    addTodo({ commit }, text){
      commit('addTodo', text)
    },

    deleteTodo({ commit }, id){
      commit('deleteTodo', id)
    },
  },
})
