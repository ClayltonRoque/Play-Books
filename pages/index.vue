<template>
  <section class="play-books-home container" style="top: 86px">
    <FbListOfBooks v-if="totalBooks" />
    <div v-else>
      <FbNoPageContent
        title="Você ainda não pesquisou livros"
        notfound="false"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useBookData } from '~/service/bookData'

const { totalBooks } = useBookData()
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
