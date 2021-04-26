<template>
  <div class="preview">
    <div class="ctrl">
        <div>
            <h3>印刷設定</h3>
            <input type="number" style="width: 40px;" min="1" v-model="hNum" @change="change">列
            <div style="display: inline-block; margin: 10px;" />
            余白<input type="number" style="width: 40px;" min="0" v-model="padding" @change="change">px
            <div style="display: inline-block; margin: 10px;" />
            <input id="check" type="checkbox" v-model="dashed">
            <label for="check">破線</label>
            <div style="display: inline-block; margin: 10px;" />
            <button @click="print">印刷プレビュー</button>
            <button @click="back">戻る</button>
        </div>
    </div>
    <div class="panel">
        <table :class="{dashed}">
            <tr v-for="(row, rIndex) in images" :key="rIndex">
                <td v-for="(image, cIndex) in row" :key="cIndex" :style="imageStyle">
                    <img alt="pop" :src="image.path">
                </td>
            </tr>
        </table>
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
    private padding = 10;
    private dashed = false;
    private get src(): Image[] { return this.$store.state.images; }
    private get imageStyle() {
        const styles = [
            `width: ${100 / this.hNum}%`,
            `padding: ${this.padding}px`,
        ];
        return styles.join(';');
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
img {
    width: 100%;
}
button {
    margin: 0 10px;
}
table {
    overflow-y: auto;
    border-collapse: collapse;
}
tr {
    page-break-inside: avoid;
}
/* td {
    padding: 10px;
} */
table.dashed > tr > td {
    border: dashed 1px #000000;
}
</style>
