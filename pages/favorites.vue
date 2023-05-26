<template>
  <section class="play-books-home container" style="top: 86px">
    <div
      v-if="favoriteBooks.length"
      class="columns is-multiline align-items-full py-5"
    >
      <FbBookCard
        v-for="(book, index) in favoriteBooks"
        :key="index"
        :book="book"
        class="play-book-card column is-4-desktop is-12-tablet is-justify-content-center is-3"
      />
    </div>
    <div v-else>
      <FbNoPageContent
        title="Você ainda não adicionou favoritos"
        notfound="false"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useBookData } from '~/service/bookData'

const { favoriteBooks } = useBookData()
</script>

<style lang="scss">
.play-books-favorites {
  top: 86px;
}
</style>
