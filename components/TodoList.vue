<script setup>
import { storeToRefs } from 'pinia'

const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)
</script>

<template>
    <section class="todo-list">

        <div class="custom">

            <h3>TO DO LIST</h3>
            <v-btn class="mx-2" @click="todoStore.isFav()"></v-btn>

        </div>

        <div class="list">
            <div v-for="todo in todoStore.sortByDate" :key="todo.id" :class="`todo-item ${todo.done && 'done'}`">



                <label>
                    <input type="checkbox" v-model="todo.done">
                    <span :class="`bubble ${todo.category}`"></span>
                </label>

                <div class="todo-content">
                    <input type="text" v-model="todo.content">
                </div>

                <v-btn class="mx-2" size="small" @click="todoStore.deleteTodo(todo.id)">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>

                <v-btn v-if="todo.isFav" class="mx-2" size="small" color="#ff5b57" @click="todoStore.toggleFav(todo.id)">
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn v-else class="mx-2" size="small" @click="todoStore.toggleFav(todo.id)">
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

            </div>

        </div>

    </section>
</template>
<style scoped>
.custom {
    display: flex;
    flex-direction: row;
}
</style>