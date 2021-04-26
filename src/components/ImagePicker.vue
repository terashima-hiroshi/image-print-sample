<template>
  <div class="image-picker">
      <div class="ctrl">
          <h3>画像を選択してください</h3>
          <button @click="selectAll">すべて選択</button>
          <button @click="clear">すべてクリア</button>
          <button @click="preview">次へ</button>
      </div>
      <div class="panel">
        <div
            class="image"
            v-for="(image, index) in images"
            :key="index"
            :class="{selected: image.checked}">
            <div class="wrap" @click="image.checked = !image.checked">
                <img alt="pop" :src="image.path">
            </div>
            <input type="checkbox" v-model="image.checked">
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Image } from '@/types/image';

@Component
export default class ImagePicker extends Vue {
    private get images() { return this.$store.state.images as Image[]; }

    private selectAll() {
        this.images.forEach((i) => i.checked = true);
    }

    private clear() {
        this.images.forEach((i) => i.checked = false);
    }

    private preview() {
        if (this.images.every((i) => !i.checked)) {
            return alert('画像を選択してください');
        }
        this.$store.commit('setImages', this.images);
        this.$router.push({ name: 'Preview' });
    }
}
</script>

<style scoped>
.image-picker {
    height: 100vh;
    overflow-y: hidden;
}
h3 {
    margin: 0;
}
.ctrl {
    padding: 20px;
    height: 60px;
    border-bottom: 1px solid lightgray;
}
.panel {
    max-height: calc(100% - 100px);
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
}
.image {
    flex-basis: 25%;
    margin-bottom: 30px;
}
.image > .wrap{
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
}
.image.selected > .wrap {
    border: 1px solid rgb(200, 200, 255);
    background-color: rgb(240, 240, 255);;
}
.image > .wrap > img {
    width: 100%;
}
button {
    margin: 0 10px;
}
</style>
