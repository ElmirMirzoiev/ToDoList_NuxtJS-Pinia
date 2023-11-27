import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    name: "",
    todos: [
      {
        id: uuid(),
        tittle: "Some todo",
        category: "business",
        content: "Need to learn how Vue3 works",
        createdAt: new Date().getTime(),
        done: false,
        isFav: false,
        isOpen: false,
      },
      {
        id: uuid(),
        tittle: "Some todo 2",
        category: "personal",
        content: "Need to learn how Nuxt works",
        createdAt: new Date().getTime(),
        done: false,
        isFav: false,
      },
    ],
  }),

  getters: {
    sortByDate() {
      return this.todos.sort((a, b) => b.createdAt - a.createdAt);
    },
    isFav() {
      return this.todos.filter((t) => t.isFav !== t.isFav);
    },
  },

  actions: {
    changeTheName(name) {
      return (this.name = name);
    },

    addTodo(content, category, tittle) {
        this.todos.push({
        tittle,
        content,
        category,
        createdAt: new Date().getTime(),
        id: uuid(),
        done: false,
        isFav: false,
        isOpen: false,
      });
    },

    deleteTodo(id) {
    this.todos = this.todos.filter((t) => t.id !== id);
    },

    toggleFav(id) {
      const todo = this.todos.find((t) => t.id === id);
      todo.isFav = !todo.isFav;
    },

    toggleDone(id) {
      const todo = this.todos.find((t) => t.id === id);
      todo.done = !todo.done;
    },

    toggleOpen(id) {
      const todo = this.todos.find((t) => t.id === id);
      todo.open = !todo.open;
    },
  },
});
