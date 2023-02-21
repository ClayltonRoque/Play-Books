<template>
  <section class="play-books-home container" style="top: 86px">
    <div
      v-if="favoriteBooks.length"
      class="columns is-multiline align-items-full py-5"
    >
      <PlayBookCard
        v-for="(book, index) in favoriteBooks"
        :key="index"
        :book="book"
        class="play-book-card column is-4-desktop is-12-tablet is-justify-content-center is-3"
      />
    </div>
    <div v-else>
      <NoPageContent
        title="Você ainda não adicionou favoritos"
        notfound="false"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { useBookData } from '~/service/bookData'

import PlayBookCard from '~/components/BookCard.vue'

import NoPageContent from '~/components/NoPageContent.vue'

export default defineComponent({
  name: 'PlayBookFavorites',
  components: {
    PlayBookCard,
    NoPageContent,
  },
  setup() {
    const { favoriteBooks } = useBookData()
    return {
      favoriteBooks,
    }
  },
})
</script>

<style lang="scss">
.play-books-favorites {
  top: 86px;
}
</style>
