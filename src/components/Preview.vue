<template>
  <div class="preview">
    <div class="ctrl">
        <div>
            <h3>印刷設定</h3>
            <input type="number" style="width: 70px;" min="1" v-model="hNum" @change="change">列
            <button @click="print">印刷プレビュー</button>
            <button @click="back">戻る</button>
        </div>
    </div>
    <div class="panel">
        <div
            class="row"
            v-for="(row, rIndex) in images"
            :key="rIndex">
            <div
                class="image"
                :style="imageStyle"
                v-for="(image, cIndex) in row"
                :key="cIndex">
                <div class="wrap">
                    <img alt="pop" :src="image.path">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Image } from '@/types/image';

@Component
export default class Preview extends Vue {
    private images: Image[][] = [];
    private hNum = 4;
    private get src(): Image[] { return this.$store.state.images; }
    private get imageStyle() {
        return `width: ${100 / this.hNum}%`;
    }

    public mounted() {
        if (this.src.every((i) => !i.checked)) {
            this.$router.replace({ name: 'Home' });
        }

        this.change();
    }

    private change() {
        this.images = [];

        let tmp: Image[] = [];
        this.src.filter((image) => image.checked).forEach((image) => {
            if (tmp.length < this.hNum) {
                tmp.push(image);
            } else {
                this.images.push(tmp);
                tmp = [image];
            }
        });
        // 最後の行を積む
        this.images.push(tmp);
    }

  private print() {
      print();
  }

  private back() {
      this.$router.back();
  }
}
</script>

<style scoped>
@media print{
    .preview {
        height: 100% !important;
    }
    .ctrl {
        display: none;
    }
    .panel {
        zoom: 1;
        width: 100vw;
        max-height: 100%;
    }
}

.preview {
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
    max-width: 100%;
    overflow-y: auto;
}
.row {
    display: block;
    page-break-inside: avoid;
    width: 100%;
}
.row > .image {
    display: inline-block;
}
.row > .image > .wrap {
    padding: 10px;
}
img {
    width: 100%;
}
button {
    margin: 0 10px;
}
</style>
