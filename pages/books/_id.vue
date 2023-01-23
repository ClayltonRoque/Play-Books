<template>
  <section class="play-books-details container">
    <div class="py-5">
      <p class="has-text-base-title">Meu Id:</p>
      <button @click="test"></button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PlayBookDetails',

  setup() {
    const router = useRouter()

    function test() {
      router.push('/')
    }

    return {
      test,
    }
  },
})
</script>

<style lang="scss">
.play-books-details {
  top: 86px;
}
</style>
