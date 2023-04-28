<template>
  <div class="play-book-search">
    <form @submit.prevent="submit">
      <div class="search">
        <input
          v-model="state.query"
          class="input is-size-5"
          type="text"
          placeholder="Pesquisar livros"
        />
        <fa class="test" icon="fa-solid fa-magnifying-glass" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

import { useBookData } from '../service/bookData'

export default defineComponent({
  name: 'PlayBookSearch',
  setup() {
    const { getDataBooks, querySearch } = useBookData()

    const state = reactive({
      query: '',
    })

    async function submit() {
      const startIndex = 0

      const resetList = true

      await getDataBooks(state.query, startIndex, resetList)
    }

    return {
      state,
      querySearch,
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
  .search {
    position: relative;
  }
  .search input {
    padding: 0px 50px;
  }
  .test {
    position: absolute;
    left: 15px;
    top: 18px;
  }
  form {
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 90%;
    .search input {
      padding: 10px;
    }
    .test {
      display: none;
    }
  }
  @media (min-width: 1025px) {
    .search input {
      padding: 0px 50px;
    }
    .test {
      position: absolute;
      left: 15px;
      top: 18px;
    }
  }
}
</style>
