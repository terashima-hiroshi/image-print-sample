<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.ctrl {
    padding: 20px;
}

.panel {
    display: flex;
    flex-wrap: wrap;
}
.image {
    flex-basis: 33%;
    /* max-width: 50vw; */
    margin-bottom: 30px;
}
.image > .wrap{
    padding: 0 10px;
}
.image > .wrap > img {
    width: 100%;
}
</style>
