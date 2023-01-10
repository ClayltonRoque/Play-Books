<template>
  <div class="play-book-search">
    <form @submit.prevent="submit">
      <input
        class="input"
        type="text"
        placeholder="Pesquisar livros"
        v-model="state.query"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

import { useBookData } from '~/service/bookData'

export default defineComponent({
  name: 'playBookSearch',
  setup() {
    const { getDataBooks } = useBookData()

    const state = reactive({
      query: '',
    })

    async function submit() {
      await getDataBooks(state.query)
    }

    return {
      state,
      getDataBooks,
      submit,
    }
  },
})
</script>
