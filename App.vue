<template>
  <div id="app">
    <SideBar></SideBar>
    <router-view/>

  </div>
</template>

<script>
import SideBar from './components/SidebarView.vue'

export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>

<style scoped>

</style>
