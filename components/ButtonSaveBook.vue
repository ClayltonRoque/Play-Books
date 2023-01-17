<template>
  <div>
    <button
      class="button is-align-content-center is-size-6"
      @click="saveBooks(book)"
    >
      Favoritar
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
    const { saveBooks } = useBookData()
    return {
      saveBooks,
    }
  },
})
</script>
