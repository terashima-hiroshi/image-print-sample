<template>
  <div class="preview">
      <div class="ctrl" style="position: relative;">
          <div>
              横に並べる数
              <input type="number" min="1" v-model="hNum" @change="change">
              <button @click="print">印刷</button>
          </div>
          <div style="position: absolute; top: 0; right: 0; padding: 20px;">
              <button @click="back">戻る</button>
          </div>
      </div>
        <div class="panel">
        <div
            class="image"
            v-for="(image, index) in images"
            :key="index">
            <div class="wrap">
                <img alt="pop" :src="image.path">
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Image } from '@/types/image';

@Component
export default class Preview extends Vue {
    private images: any[] = [];
    private hNum = 3;

    public mounted() {
        (this.$store.state.images as Image[]).forEach((i) => {
            if (i.checked) {
                this.images.push(i);
            }
        });

        if (!this.images.length) {
            this.$router.replace({ name: 'Home'});
        }

        this.change();
    }

    private change() {
        const width = 100 / this.hNum;

        const elements = document.getElementsByClassName('image');
        if (elements.length) {
            for (const el of elements) {
                (el as HTMLElement).style.flexBasis = width + '%';
            }
        }
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
  .ctrl {
      display: none;
  }
  .panel {
      zoom: 1;
      width: 100vw;
  }
}
</style>
