<template>
  <div class="image-picker">
      <div class="ctrl">
          <h3>画像を選択してください</h3>
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
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Image } from '@/types/image';

@Component
export default class ImagePicker extends Vue {
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
    ];

    public preview() {
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
    flex-basis: 33%;
    max-width: 50vw;
    margin-bottom: 30px;
}
.image > .wrap{
    padding: 0 10px;
}
.image > .wrap > img {
    width: 100%;
}
</style>
