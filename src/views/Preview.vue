<template>
  <div class="preview">
    <PreviewConponent />
  </div>
</template>

<script>
// @ is an alias to /src
import PreviewConponent from '@/components/Preview.vue';

export default {
  name: 'Preview',
  components: {
    PreviewConponent,
  },
};
</script>
