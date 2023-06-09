<template>
  <div class="test">
    <button @click="count">{{ counter }}</button>
  </div>
  <!-- <section class="play-books-home container" style="top: 86px">
    <FbListOfBooks v-if="totalBooks" />
    <div v-else>
      <FbNoPageContent
        title="Você ainda não pesquisou livros"
        notfound="false"
      />
    </div>
  </section> -->
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { userCounter } from '~/store/counter'

const useCounterStore = userCounter()
const { count } = useCounterStore

const { counter } = storeToRefs(useCounterStore)

// import { useBookData } from '~/service/bookData'

// const { totalBooks } = useBookData()
</script>

<style lang="scss">
/* .play-books-home {
  top: 86px;
  .play-book-card {
    display: flex;
    cursor: pointer;
  }
} */
.test {
  font-size: 13rem;
}
</style>
