<template>
  <NavBar></NavBar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/UI/Navbar.vue'

export default {
  components: {
    NavBar,
  }
}
</script>

<style >
  .app {
    padding: 2rem;
  }
  button {
    
    color: white;
    background-color: darkorchid;
    padding: 10px;
    border-radius: 10px;
    
  }
</style>