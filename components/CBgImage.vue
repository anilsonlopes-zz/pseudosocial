<template>
  <div v-if="src" class="bg-cover" :style="{ backgroundImage: `url(${src})` }" :aria-label="label" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: false,
      default: ''
    },
    label: {
      type: String,
      required: false,
      default: 'Imagem sem legenda'
    }
  }
}
</script>
