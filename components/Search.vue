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
import { defineComponent, reactive, useContext } from '@nuxtjs/composition-api'

import { useBookData } from '../service/bookData'

export default defineComponent({
  name: 'PlayBookSearch',
  setup() {
    const { getDataBooks } = useBookData()
    const nuxtContext = useContext()

    const state = reactive({
      query: '',
    })

    async function submit() {
      nuxtContext.redirect('/')
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
  }

  @media (max-width: 1024px) {
    width: 90%;
  }
}
</style>
