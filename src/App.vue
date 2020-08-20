<template>
  <div id="app" class="">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import './assets/css/tailwind.css'
import './assets/css/main.css'

import Navbar from './components/layouts/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
