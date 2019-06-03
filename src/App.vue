<template>
  <div id="app">
    <h1>Photo Search</h1>
    <Photos />
  </div>
</template>

<script>
import Photos from './components/Photos.vue';

export default {
  name: 'app',
  components: {
    Photos
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  margin: 0;
  padding: 26px;
}

body {
  margin: 0;
}
</style>
