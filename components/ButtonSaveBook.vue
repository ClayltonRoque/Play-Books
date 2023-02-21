<template>
  <div class="play-book-button-save mt-2">
    <button
      v-if="!alreadyfavorite(book)"
      class="button is-align-content-center is-size-6"
      @click="saveBooks(book)"
    >
      Favoritar <fa class="pl-1" icon="fa-solid fa-heart-circle-plus" />
    </button>
    <button
      v-else
      class="button is-brand-red is-align-content-center is-size-6"
      @click="removeBook(book)"
    >
      Remover
      <fa class="pl-1" icon="fa-solid fa-heart-circle-xmark" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

import { useBookData } from '../service/bookData'

export default defineComponent({
  name: 'PlayBookButtonSaveBook',
  props: {
    book: {
      type: Object as PropType<BookDocument.Volume>,
      required: true,
    },
  },
  setup() {
    const { saveBooks, alreadyfavorite, removeBook } = useBookData()

    return {
      saveBooks,
      removeBook,
      alreadyfavorite,
    }
  },
})
</script>

<style lang="scss">
.play-book-button-save {
  position: absolute;
  bottom: 1rem;
  right: 0.5rem;
}
</style>
