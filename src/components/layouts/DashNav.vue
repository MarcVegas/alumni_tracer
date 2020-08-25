<template>
  <div>
      <nav class="flex flex-wrap justify-between items-center h-16 bg-white px-4">
        <div class="flex flex-wrap lg:visible">
          <router-link to="/">Home</router-link>
          <router-link to="/forum">Forum</router-link>
        </div>
        <div class="flex">
          <button class="focus:outline-none hover:bg-gray-200 p-2 rounded-lg">
            <svg viewBox="0 0 20 20" fill="currentColor" class="bell w-6 h-6 text-gray-800 hover:text-gray-700"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
          </button>
          <button class="ml-3 focus:outline-none hover:bg-gray-200 p-2 rounded-lg">
            <img class="rounded-full w-6 inline-block" src="../../assets/user.png" alt="">
            <span class="font-bold pl-3 text-gray-800 ">John</span>
            <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-down w-6 h-6 inline-block text-gray-800 hover:text-gray-700"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
    name: 'DashNav'
}
</script>

<style>

</style>