<template>
  <div>
      <DashNav />
      <div class="flex flex-wrap">
          <div class="w-1/5 p-4">
              <div class="bg-gray-900 rounded-lg w-full h-full p-6">
                  <div class="flex flex-col text-white">
                      <button class="mt-3 item" v-on:click="panel = 1">
                          <svg viewBox="0 0 20 20" fill="currentColor" class="chart-bar w-6 h-6 inline-block text-teal-700"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
                          <span class="pl-2">Analytics</span>
                      </button>
                      <button class="mt-2 item" v-on:click="dropMaintenance = !dropMaintenance">
                          <svg viewBox="0 0 20 20" fill="currentColor" class="adjustments w-6 h-6 inline-block text-yellow-600"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                          <span class="pl-2">Management</span>
                          <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-down w-6 h-6 inline-block text-gray-200 ml-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </button>
                      <transition name="fade" leave-active-class="fadeUp">
                        <div class="flex flex-col ml-12" v-show="dropMaintenance">
                            <button v-on:click="panel = 2" class="font-semibold text-left text-sm p-1 hover:text-blue-600 focus:outline-none">
                                <svg viewBox="0 0 20 20" fill="currentColor" class="globe w-6 h-6 text-yellow-600 inline-block"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path></svg>
                                Department</button>
                            <button v-on:click="panel = 3" class="font-semibold text-left text-sm p-1 hover:text-blue-600 focus:outline-none">
                                <svg viewBox="0 0 20 20" fill="currentColor" class="globe w-6 h-6 text-teal-600 inline-block"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path></svg>  
                                News</button>
                            <button v-on:click="panel = 4" class="font-semibold text-left text-sm p-1 hover:text-blue-600 focus:outline-none">
                                <svg viewBox="0 0 20 20" fill="currentColor" class="globe w-6 h-6 text-blue-600 inline-block"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path></svg> 
                                Users</button>
                        </div>
                      </transition>
                      <button v-on:click="panel = 4" class="mt-2 item">
                          <svg viewBox="0 0 20 20" fill="currentColor" class="speakerphone w-6 h-6 inline-block text-pink-700"><path fill-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clip-rule="evenodd"></path></svg>
                          <span class="pl-2">Announcement</span>
                      </button>
                      <button class="mt-2 item">
                          <svg viewBox="0 0 20 20" fill="currentColor" class="user-group w-6 h-6 inline-block text-orange-700"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                          <span class="pl-2">Requests</span>
                      </button>
                  </div>
              </div>
          </div>
          <div class="w-4/5 p-4">
                <transition name="fadeRight" leave-active-class="fadeUp">
                    <PanelAnalytics v-if="panel == 1" />
                    <PanelDepartment  v--else-if="panel == 2" />
                </transition>
            </div>
      </div>
  </div>
</template>

<script>
import DashNav from '../components/layouts/DashNav'
import PanelAnalytics from '../components/layouts/PanelAnalytics'
import PanelDepartment from '../components/layouts/PanelDepartment'

export default {
    name: 'Dashboard',
    components: {
        DashNav,
        PanelAnalytics,
        PanelDepartment
    },
    data() {
        return {
            panel: 1,
            dropMaintenance: false,
        }
    },
}
</script>

<style>

</style>