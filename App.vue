<template>
  <div id="app">
    <Menu></Menu>
    <router-view/>

  </div>
</template>

<script>
import Menu from '../src/components/SideBarView.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style scoped>
</style>