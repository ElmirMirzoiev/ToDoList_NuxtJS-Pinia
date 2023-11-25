<script setup>
import { storeToRefs } from 'pinia'

const todoStore = useTodoStore()
</script>

<template>
    <section class="todo-list">
        <h3>TO DO LIST</h3>

        <div class="list">
            <div v-for="todo in todoStore.sortByDate" :key="todo.id" :class="`todo-item ${todo.done && 'done'}`">

                <label>
                    <input type="checkbox" v-model="todo.done">
                    <span :class="`bubble ${todo.category}`"></span>
                </label>

                <div class="todo-content">
                    <input type="text" v-model="todo.content">
                </div>

                <DeleteButton :deleteTodo="todoStore.deleteTodo" :id="todo.id" />

            </div>

        </div>

    </section>
</template>