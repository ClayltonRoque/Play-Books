<template>
  <section class="play-books-home container" style="top: 86px">
    <ListOfBooks v-if="totalBooks" />
    <div v-else>
      <NoPageContent title="Você ainda não pesquisou livros" notfound="false" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { useBookData } from '~/service/bookData'

import NoPageContent from '~/components/NoPageContent.vue'

import ListOfBooks from '~/components/ListOfBooks.vue'

export default defineComponent({
  name: 'PlayBookSearch',
  components: { NoPageContent, ListOfBooks },
  setup() {
    const { totalBooks } = useBookData()

    return {
      totalBooks,
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
