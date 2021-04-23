<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Image } from './types/image';

@Component({})
export default class App extends Vue {
    private images: Image[] = [
        { path: './images/pop1.png', checked: false },
        { path: './images/pop2.png', checked: false },
        { path: './images/pop3.png', checked: false },
        { path: './images/pop4.png', checked: false },
        { path: './images/pop5.png', checked: false },
        { path: './images/pop6.png', checked: false },
        { path: './images/pop7.png', checked: false },
        { path: './images/pop8.png', checked: false },
        { path: './images/pop11.png', checked: false },
        { path: './images/pop12.png', checked: false },
        { path: './images/pop13.png', checked: false },
        { path: './images/pop14.png', checked: false },
        { path: './images/pop15.png', checked: false },
        { path: './images/pop16.png', checked: false },
        { path: './images/pop17.png', checked: false },
        { path: './images/pop18.png', checked: false },
        { path: './images/pop21.png', checked: false },
        { path: './images/pop22.png', checked: false },
        { path: './images/pop23.png', checked: false },
        { path: './images/pop24.png', checked: false },
        { path: './images/pop25.png', checked: false },
        { path: './images/pop26.png', checked: false },
        { path: './images/pop27.png', checked: false },
        { path: './images/pop28.png', checked: false },
        { path: './images/pop31.png', checked: false },
        { path: './images/pop32.png', checked: false },
        { path: './images/pop33.png', checked: false },
        { path: './images/pop34.png', checked: false },
        { path: './images/pop35.png', checked: false },
        { path: './images/pop36.png', checked: false },
        { path: './images/pop37.png', checked: false },
        { path: './images/pop38.png', checked: false },
        { path: './images/pop41.png', checked: false },
        { path: './images/pop42.png', checked: false },
        { path: './images/pop43.png', checked: false },
        { path: './images/pop44.png', checked: false },
        { path: './images/pop45.png', checked: false },
        { path: './images/pop46.png', checked: false },
        { path: './images/pop47.png', checked: false },
        { path: './images/pop48.png', checked: false },
        { path: './images/pop51.png', checked: false },
        { path: './images/pop52.png', checked: false },
        { path: './images/pop53.png', checked: false },
        { path: './images/pop54.png', checked: false },
        { path: './images/pop55.png', checked: false },
        { path: './images/pop56.png', checked: false },
        { path: './images/pop57.png', checked: false },
        { path: './images/pop58.png', checked: false },
    ];
    public created() {
        this.$store.commit('setImages', this.images);
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
}
</style>
