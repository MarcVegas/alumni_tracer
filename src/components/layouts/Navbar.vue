<template>
  <div>
    <nav class="flex flex-wrap justify-between items-center h-20 shadow-md bg-white px-4">
      <div class="">
        <img class="w-12" src="../../assets/logo.png" alt="">
      </div>
      <div class="flex flex-wrap">
        <router-link to="/">News</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>

</style>