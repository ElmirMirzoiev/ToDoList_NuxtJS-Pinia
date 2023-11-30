<template>
  <section class="greeting">
    <h2 class="title">
      What's up, <input type="text" placeholder="Name here" v-model="name" />
    </h2>
  </section>
</template>

<script setup>
const { changeTheName } = useTodoStore();

const name = ref("");

watch(name, (newName) => {
  changeTheName(newName);
});
</script>
