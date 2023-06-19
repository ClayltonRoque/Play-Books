<template>
  <div class="fb-list-of-book">
    <div class="fb-list-of-book-wrapper" ref="scroller">
      <div class="container">
        <div class="columns is-multiline align-items-full py-5">
          <div class="columns is-multiline align-items-full py-5">
            <FbBookCard
              v-for="(book, index) in bookStore.list"
              :key="index"
              :book="book"
              class="play-book-card column is-4-desktop is-12-tablet is-justify-content-center is-3"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBookStore } from '@/store/book'

import { ref } from 'vue'
import { useInfiniteScroll } from '@vueuse/core'

const scroller = ref<HTMLElement | null>(null)

const bookStore = useBookStore()

useInfiniteScroll(scroller, onLoadMore, { distance: 10 })

function onLoadMore() {
  console.log('oi')
}

// const state = reactive({
//   pageCount: 0,
//   pageDisabled: true,
//   paginationTypeSimple: false,
//   paginationTypeInfinity: false,
// })

// const preventMoreRequest = computed(() => {
//   return state.pageDisabled
// })

// const listOfBooksBaseInTypePage = computed(() => {
//   if (personalization.value.typePagination === 'Rolagem Infinita') {
//     return listOfBooks.value
//   }
//   if (personalization.value.typePagination === 'Paginação Simples') {
//     return books.value
//   }
// })

// watch(
//   () => personalization.value.typePagination,
//   (nextCurrentValuePage) => {
//     if (nextCurrentValuePage === 'Rolagem Infinita') {
//       state.paginationTypeSimple = false
//       state.paginationTypeInfinity = true
//       getDataBooks(querySearch.value.toString())
//     } else if (nextCurrentValuePage === 'Paginação Simples') {
//       state.paginationTypeInfinity = false
//       state.paginationTypeSimple = true
//       getDataBooks(querySearch.value.toString())
//     }
//   },
//   {
//     immediate: true,
//   }
// )
// function loadMore() {
//   setTimeout(() => {
//     state.pageDisabled = false

//     const resetList = false

//     getDataBooks(querySearch.value.toString(), state.pageCount, resetList)
//     state.pageDisabled = true
//   }, 1000)

//   state.pageCount += 20
// }
</script>

<style lang="scss">
.fb-list-of-book {
  &-wrapper {
    width: 100%;
    height: calc(100vh - #{$navbar-height});
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
