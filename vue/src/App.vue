<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['user']),
  },
}
</script>

<template>
  <pre>{{ user }}</pre>
</template>

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
