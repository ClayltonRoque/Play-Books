<template>
  <div>
    <button
      v-if="!favoriteBooks(book)"
      class="button is-align-content-center is-size-6"
      @click="saveBooks(book)"
    >
      Favoritar
    </button>
    <button
      v-else
      class="button is-brand-red is-align-content-center is-size-6"
      @click="removeBook(book)"
    >
      Remover
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
    const { saveBooks, favoriteBooks, removeBook } = useBookData()

    return {
      saveBooks,
      removeBook,
      favoriteBooks,
    }
  },
})
</script>
