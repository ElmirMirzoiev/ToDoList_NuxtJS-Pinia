import { defineStore } from "pinia";


export const useTodoStore = defineStore("todoStore", {

  state: () => ({
    name: '',
    todos: [
      {
        id: 1,
        content: 'Some todo',
        category: 'personal',
        createdAt: '5',
        done: false
      },
      {
        id: 2,
        content: 'Some todo 2',
        category: 'personal',
        createdAt: '5',
        done: false
      }
    ],
  }),

  getters: {
    sortByDate () {
      return  this.todos.sort((a, b) => b.createdAt - a.createdAt)
    } 
},

  actions: {

  changeTheName(name) {
    return this.name = name
  },

  addTodo(content, category) {
    return this.todos.push({
      content,
      category,
      createdAt: new Date().getTime(),
      id: Math.floor(Math.random() * 10000),
      done: false
    })
  },

  deleteTodo(id) {
    return this.todos = this.todos.filter(t => t.id !== id)
  }
},
});