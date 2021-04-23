<template>
  <div class="home">
    <ImagePicker />
  </div>
</template>

<script>
// @ is an alias to /src
import ImagePicker from '@/components/ImagePicker.vue'

export default {
  name: 'Home',
  components: {
    ImagePicker
  }
}
</script>
