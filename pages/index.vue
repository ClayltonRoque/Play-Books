<template>
  <section class="play-books-home container" style="top: 86px">
    <div class="columns is-multiline align-items-full py-5">
      <PlayBookCard
        v-for="(book, index) in books"
        :key="index"
        :book="book"
        class="play-book-card column is-4-desktop is-12-tablet is-justify-content-center is-3"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { useBookData } from '../service/bookData'

import PlayBookCard from '../components/BookCard.vue'

export default defineComponent({
  name: 'PlayBookSearch',
  components: { PlayBookCard },
  setup() {
    const { books } = useBookData()
    return {
      books,
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
}
</style>
