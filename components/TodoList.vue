<script setup>
const todoStore = useTodoStore();
</script>

<template>
  <section class="todo-list">
    <h3>TO DO LIST</h3>

    <div class="list">
      <div
        v-for="todo in todoStore.sortByDate"
        :key="todo.id"
        class="todo-item"
      >
        <div class="todo-content">
          <span>{{ todo.tittle }}</span>
          <span>{{ todo.content }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
