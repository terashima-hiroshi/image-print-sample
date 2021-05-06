<template>
  <div class="preview">
    <div class="ctrl">
        <div>
            <h3>印刷設定</h3>
            <div class="label-input">
                <input type="number" style="width: 40px;" min="1" v-model="horizontal" @input="change">
                <label>よこ</label>
            </div>
            x
            <div class="label-input">
                <input type="number" style="width: 40px;" min="1" v-model="vertical" @input="change">
                <label>たて</label>
            </div>
            <div style="display: inline-block; margin: 10px;" />
            <div class="label-input">
                <input type="number" style="width: 40px;" min="1" v-model="padding" @input="change">
                <label>余白(mm)</label>
            </div>
            <div style="display: inline-block; margin: 10px;" />
            <input id="check" type="checkbox" v-model="dashed">
            <label for="check">破線</label>
            <div style="display: inline-block; margin: 10px;" />
            <button @click="print">印刷プレビュー</button>
            <button @click="back">戻る</button>
        </div>
    </div>
    <div class="panel">
        <div class="page" :class="{dashed: dashed}">
            <div class="row" v-for="(row, rIndex) in images" :key="rIndex" :class="{break: isBreak(rIndex)}">
                <div class="wrapper">
                    <div class="col" v-for="(image, cIndex) in row" :key="cIndex" :style="imageStyle">
                        <img v-if="image.path" alt="pop" :src="image.path">
                    </div>
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
    private horizontal = 4;
    private vertical = 4;
    private padding = 3;
    private dashed = false;
    private get src(): Image[] { return this.$store.state.images; }
    private get imageStyle() {
        const styles = [
            `flex-basis: ${100 / this.horizontal}%`,
            `padding: ${this.padding}mm`,
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
            if (tmp.length < this.horizontal) {
                tmp.push(image);
            } else {
                this.images.push(tmp);
                tmp = [image];
            }
        });
        if (tmp.length < this.horizontal) {
            for (let i = tmp.length; i < this.horizontal; i++) {
                tmp.push({ path: '', checked: false });
            }
        }
        // 最後の行を積む
        this.images.push(tmp);
    }

    private isBreak(rowIndex: number) {
        if (rowIndex > 0 && rowIndex % this.vertical === 0) {
            return true;
        }
        return false;
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
    tr.break {
        page-break-before: always;
        border-top: inherit;
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
.label-input {
    display: inline-block;
    position: relative;
}
.label-input > label {
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 100%;
    font-size: 10px;
    text-align: left;
    line-height: 1em;
    color: rgb(170, 170, 170);
}
.panel {
    max-height: calc(100% - 100px);
    max-width: 100%;
    overflow-y: auto;
    background-color: rgb(230, 230, 230);
}
img {
    width: 100%;
}
button {
    margin: 0 10px;
}
.row.break {
    margin-top: 30px;
    page-break-before: always;
}
.row > .wrapper {
    display: flex;
}
.col {
    background-color: white;
}
.dashed > .row > .wrapper > .col {
    border-top: dashed 1px #000000;
    border-left: dashed 1px #000000;
}
/** 一行目のセル */
.dashed > .row:first-child > .wrapper > .col {
    border-top: none;
}
/** 一列目のセル */
.dashed > .row > .wrapper > .col:first-child {
    border-left: none;
}
</style>
