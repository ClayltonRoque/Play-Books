<template>
  <section class="play-books-home container">
    <button
      @click="
        personalizeSiteService.personalizationValuesSet({
          typeSearch: 'Autor',
          typePagination: 'Rolagem Infinita',
        })
      "
    >
      {{ personalizeSiteService.personalizationValues }}
    </button>
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
import { usePersonalizeSiteService } from '@/service/personalize-site'

const bookStore = useBookStore()
const personalizeSiteService = usePersonalizeSiteService()

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
