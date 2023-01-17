<template>
  <section class="play-books-details container">
    <div class="py-5">
      <p class="has-text-base-title">
        Meu Id: {{ $route.params.id }}
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'PlayBookDetails',
  setup () {
    return {}
  }
})
</script>

<style lang="scss">
.play-books-details {
  top: 86px;
}
</style>
