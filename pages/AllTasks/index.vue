<script setup>
const todoStore = useTodoStore();
</script>

<template>
  <section class="todo-list">
    <h3>All tasks with a description</h3>

    <div class="list">
      <div
        v-for="todo in todoStore.sortByDate"
        :key="todo.id"
        :class="`todo-item ${todo.done && 'done'}`"
      >
        <TaskCard
          :tittle="todo.tittle"
          :content="todo.content"
          :category="todo.category"
          :id="todo.id"
          :done="todo.done"
          :isFav="todo.isFav"
          :isOpen="todo.isOpen"
          @toggleFav="todoStore.toggleFav"
          @toggleDone="todoStore.toggleDone"
          @toggleOpen="todoStore.toggleOpen"
          @deleteTodo="todoStore.deleteTodo"
        />
      </div>
    </div>
  </section>
</template>
