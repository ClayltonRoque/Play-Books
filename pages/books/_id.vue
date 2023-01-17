<template>
  <section class="play-books-details container">
    <div class="py-5">
      <p class="has-text-base-title">Meu Id: {{ $route.params.id }}</p>
      <PlayBookButtonSaveBook />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import PlayBookButtonSaveBook from '../../components/ButtonSaveBook.vue'
export default defineComponent({
  name: 'PlayBookDetails',
  components: {
    PlayBookButtonSaveBook,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss">
.play-books-details {
  top: 86px;
}
</style>
