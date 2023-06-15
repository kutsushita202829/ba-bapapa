<template>
  <MarubatsuArea />
</template>

<script>
// import TableGrid from './components/TableGrid.vue'
import MarubatsuArea from './components/MarubatsuArea.vue'
export default {
  name: 'App',
  components: {
    // TableGrid
    MarubatsuArea
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
