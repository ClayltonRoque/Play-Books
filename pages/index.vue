<template>
  <section class="container" style="top: 86px;">
    <div class="columns is-multiline align-items-full py-5">
      <playBookCard v-for="(book, index) in books" :key="index" :book="book" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import playBookCard from '../components/BookCard.vue'
import { useBookData } from '../service/bookData'

export default defineComponent({
  name: 'playBookSearch',
  components: { playBookCard },
  setup() {
    const { books } = useBookData()
    return {
      books,
    }
  },
})
</script>

<style lang="scss" scoped></style>
