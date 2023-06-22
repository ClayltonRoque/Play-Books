<template>
  <div class="play-books-home">
    <booksList v-if="bookStore.list.length" />
    <div v-else>
      <NoPageContent title="Você ainda não pesquisou livros" notfound="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBookStore } from '@/store/book'

const bookStore = useBookStore()
</script>

<style lang="scss">
.play-books-home {
  .play-book-card {
    display: flex;
    cursor: pointer;
  }
}
</style>
