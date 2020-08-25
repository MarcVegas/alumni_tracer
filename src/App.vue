<template>
  <div id="app" class="">
    <Navbar v-if="homePage" />
    <router-view/>
  </div>
</template>

<script>
import './assets/css/tailwind.css'
import './assets/css/main.css'
require('vue2-animate/dist/vue2-animate.min.css')

import Navbar from './components/layouts/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  computed: {
    homePage() {
        if(this.$route.path != "/dashboard" ) {
          return true
        } else {
          return false
        }
      }
  }
}
</script>

<style>

</style>
