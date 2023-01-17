<template>
  <div class="play-book-search">
    <form @submit.prevent="submit">
      <input
        v-model="state.query"
        class="input is-size-5"
        type="text"
        placeholder="Pesquisar livros"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

import { useBookData } from '../service/bookData'

export default defineComponent({
  name: 'PlayBookSearch',
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

<style lang="scss">
.play-book-search {
  display: flex;
  justify-content: center;
  width: 70%;
  gap: 1rem;

  form {
    width: 100%;

    input {
      // padding: 1rem 1rem;
      // padding: 0.75rem 1rem;
    }
  }
}
</style>
