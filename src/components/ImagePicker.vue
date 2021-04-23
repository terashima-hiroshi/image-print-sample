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
            @click="image.checked = !image.checked">
            <div class="wrap">
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
.ctrl {
    padding: 20px;
}

.panel {
    display: flex;
    flex-wrap: wrap;
}
.image {
    flex-basis: 25%;
    margin-bottom: 30px;
}
.image > .wrap{
    padding: 0 10px;
}
.image > .wrap > img {
    width: 100%;
}
button {
    margin: 0 10px;
}
</style>
