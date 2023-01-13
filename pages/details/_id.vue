<template>
  <section class="play-books-details container" style="top: 86px;">
    <div class="py-5">
      <p class="has-text-base-title">Meu Id: {{ $route.params.id }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'playBookDetails',
  setup() {
    return {}
  },
})
</script>

<style lang="scss"></style>
