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
    <span class="arrow" @click="$emit('toggleOpen', id)">arrow</span>
  </div>

  <div :class="isOpen ? 'cardDescriptionOpen' : 'cardDescriptionOpen'">
    <label>
      <input type="checkbox" @click="$emit('toggleDone', id)" />
      <span :class="`bubble ${category}`"></span>
    </label>

    <div class="todo-content">
      <span>{{ content }}</span>
    </div>

    <v-btn class="mx-2" size="small" @click="$emit('deleteTodo', id)">
      <v-icon>mdi-delete</v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
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
.arrow {
  display: block;
  cursor: pointer;
}
.cardDescriptionOpen {
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  /* opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.2s ease-out; */
}

.cardDescription {
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
}
</style>
