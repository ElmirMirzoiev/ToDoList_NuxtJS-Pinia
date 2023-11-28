<script setup>
const emits = defineEmits([
  "toggleFav",
  "toggleDone",
  "deleteTodo",
  "toggleOpen",
]);

const props = defineProps([
  "tittle",
  "content",
  "category",
  "id",
  "done",
  "isFav",
  "isOpen",
]);
</script>

<template>
  <div class="cardTittle">
    <span>{{ tittle }}</span>
    <v-icon @click="$emit('toggleOpen', id)">mdi-arrow-down-thin</v-icon>
  </div>

  <div class="cardDescription" :class="isOpen ? 'open' : ''">
    <label>
      <input type="checkbox" @click="$emit('toggleDone', id)" />
      <span :class="`bubble ${category}`"></span>
    </label>

    <div class="todo-content">
      <span>{{ content }}</span>
    </div>

    <v-btn class="mx-2 my-2" size="small" @click="$emit('deleteTodo', id)">
      <v-icon>mdi-delete</v-icon>
    </v-btn>

    <v-btn
      class="mx-2 my-2"
      size="small"
      :color="isFav ? '#ff5b57' : ''"
      @click="$emit('toggleFav', id)"
    >
      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </div>
</template>

<style scoped>
.cardTittle {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  font-weight: 900;
  width: 100%;
}
.cardDescription {
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  transition: all 0.5s linear;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-in-out;
}

.cardDescription.open {
  opacity: 1;
  max-height: 1000px;
}
</style>
