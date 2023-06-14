<template>
  <section class="play-books-home container">
    <div v-if="bookStore.list.length">
      <ul v-for="(book, index) in bookStore.list">
        <li :key="index">
          <FbBookCard :book="book" />
        </li>
      </ul>
    </div>
    <div v-else>
      <FbNoPageContent
        title="Você ainda não pesquisou livros"
        notfound="false"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useBookStore } from '@/store/book'

const bookStore = useBookStore()

// Buscando livros do Google Book API
bookStore.fetchBooks()
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
