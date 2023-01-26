<template>
  <section class="play-books-home container" style="top: 86px">
    <div v-if="books.length" class="columns is-multiline align-items-full py-5">
      <PlayBookCard
        v-for="(book, index) in books"
        :key="index"
        :book="book"
        class="play-book-card column is-4-desktop is-12-tablet is-justify-content-center is-3"
      />
    </div>
    <BooksPagination v-if="state.activePagination" />
    <div v-else>
      <NoPageContent title="Você ainda não pesquisou livros" notfound="false"/>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from '@nuxtjs/composition-api'

import { useBookData } from '~/service/bookData'

import PlayBookCard from '~/components/BookCard.vue'

import NoPageContent from '~/components/NoPageContent.vue'

import BooksPagination from '~/components/BooksPagination.vue'

export default defineComponent({
  name: 'PlayBookSearch',
  components: { PlayBookCard, NoPageContent, BooksPagination },
  setup() {
    const { books } = useBookData()
    const state = reactive({
      activePagination: false,
    })
    watch(books, () => {
      if (books.value.length) {
        state.activePagination = true
      }
    })
    return {
      books,
      state,
    }
  },
})
</script>

<style lang="scss">
.play-books-home {
  top: 86px;
  .play-book-card {
    display: flex;
    cursor: pointer;
  }

  .card-header-title {
    border-bottom: 2px solid $brand-blue;
    margin-left: 1.5rem
  }
}
</style>
