import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export const useTodoStore = defineStore("todoStore", {

  state: () => ({
    name: '',
    todos: [
      {
        id: 1,
        title: '',
        category: 'personal',
        title: '',
        content: 'Some todo',
        createdAt: '5',
        done: false,
        isFav: false
      },
      {
        id: 2,
        title: '',
        category: 'personal',
        title: '',
        content: 'Some todo 2',
        createdAt: '5',
        done: false,
        isFav: false
      }
    ],
  }),

  getters: {
    sortByDate() {
      return this.todos.sort((a, b) => b.createdAt - a.createdAt)
    },
    isFav() {
      return this.todos.filter(t => t.isFav !== t.isFav)
    }

  },

  actions: {

    changeTheName(name) {
      return this.name = name
    },

    addTodo(content, category, tittle) {
      return this.todos.push({
        tittle,
        content,
        category,
        createdAt: new Date().getTime(),
        id: uuid(),
        done: false,
        isFav: false
      })
    },

    deleteTodo(id) {
      return this.todos = this.todos.filter(t => t.id !== id)
    },

    toggleFav(id) {
      const todo = this.todos.find(t => t.id === id)
      todo.isFav = !todo.isFav
    }

  },
});