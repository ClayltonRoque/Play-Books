<template>
  <div class="play-books-favorites container">
    <div
      v-if="favoriteBooks.length"
      class="columns is-multiline align-items-full py-5"
    >
      <BooksCard
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
  </div>
</template>

<script setup lang="ts">
import { favoriteBookService } from '@/service/favorite'

const { favoriteBooks } = favoriteBookService()
</script>

<style lang="scss"></style>
