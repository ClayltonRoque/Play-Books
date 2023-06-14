<template>
  <section class="play-books-home container">
    <div>hello world</div>
    <button @click="bookStore.fetchBooks">Click in me</button>
    <ul v-for="(book, index) in bookStore.list" :key="index">
      <li>{{ book }}</li>
    </ul>
    <!-- <FbListOfBooks v-if="totalBooks" />
    <div v-else>
      <FbNoPageContent
        title="Você ainda não pesquisou livros"
        notfound="false"
      />
    </div> -->
  </section>
</template>

<script setup lang="ts">
import { useBookStore } from '@/store/book'

const bookStore = useBookStore()
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
