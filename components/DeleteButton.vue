<script setup>
const props = defineProps({
    deleteTodo: Function,
    id: Number,
});
const { deleteTodo, id } = props;
</script>

<template>
    <div class="actions">
        <button class="delete" @click="deleteTodo(id)">Delete</button>
    </div>
</template>