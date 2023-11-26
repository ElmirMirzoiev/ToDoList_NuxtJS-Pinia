<template>
    <section class="create-todo">
        <h4>Create Todo</h4>

        <form @submit.prevent="handleSubmit">

            <input type="text" placeholder="name your task" v-model="taskTittle">
            <input type="text" placeholder="describe what do you want to do" v-model="newTask">

            <h4>Pick a category</h4>
            <div class="options">
                <label>
                    <input type="radio" name="category" value="business" v-model="category" />
                    <span class="bubble bussiness"></span>
                    <div>Business</div>
                </label>

                <label>
                    <input type="radio" name="category" value="personal" v-model="category" />
                    <span class="bubble personal"></span>
                    <div>Personal</div>
                </label>

            </div>
            <AddButton />
        </form>
    </section>
</template>

<script setup>


const todoStore = useTodoStore()


const taskTittle = ref('')
const newTask = ref('')
const category = ref(null)

const handleSubmit = () => {

    if (newTask.value.length > 0 && taskTittle.value.length > 0) {
        todoStore.addTodo(newTask.value, category.value, taskTittle.value)
    }
    taskTittle.value = ''
    newTask.value = ''
    category.value = null
}

</script>