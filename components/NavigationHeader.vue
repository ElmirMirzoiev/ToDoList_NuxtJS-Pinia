<template>
  <header>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/alltasks">All Tasks</NuxtLink>
      </li>
    </ul>
  </header>
</template>

<script setup>
const links = [
  { to: "/", linkName: "Home" },
  { to: "/alltasks", linkName: "All Tasks" },
  { to: "/login", linkName: "Login" },
];
</script>

<style scoped>
header {
  width: 100%;
  background-color: #fff;
  margin-top: 0.5rem;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

ul {
  display: flex;
  justify-content: center;
}

li {
  margin-top: 1.2rem;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  padding-right: 1em;
  display: block;
  cursor: pointer;
}

a {
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #888;
  border-radius: 0.25rem;
  padding: 0.3rem;
}

a:hover {
  background-color: #ea40a4;
}

.router-link-active {
  background-color: #ea40a4;
}
</style>
