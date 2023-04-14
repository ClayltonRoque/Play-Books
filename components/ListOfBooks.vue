<template>
  <section class="play-books-home container" style="top: 86px">
    <div>
      <div class="columns is-multiline align-items-full py-5">
        <TransitionGroup
          class="columns is-multiline align-items-full py-5"
          tag="div"
          :css="false"
          @before-enter="onBeforeEnter"
          @leave="onLeaveCard"
          @enter="onEnterCard"
        >
          <div class="columns is-multiline align-items-full py-5">
            <PlayBookCard
              v-for="(book, index) in listOfBooksBaseInTypePage"
              :key="index"
              :book="book"
              class="play-book-card column is-4-desktop is-12-tablet is-justify-content-center is-3"
            />
          </div>

          <div v-if="">
            <infinite-loading
              v-if="books.length"
              :v-infinite-scroll-disabled="preventMoreRequest"
              force-use-infinite-wrapper=".el-table__body-wrapper"
              spinner="waveDots"
              @distance="1"
              @infinite="loadMore"
            ></infinite-loading>
          </div>

          <div>
            <BooksPagination />
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@nuxtjs/composition-api'

import { useBookData } from '~/service/bookData'

import gsap from 'gsap'

import PlayBookCard from '~/components/BookCard.vue'

import BooksPagination from '~/components/BooksPagination.vue'

export default defineComponent({
  name: 'PlayBookSearch',
  components: { PlayBookCard, BooksPagination },
  setup() {
    const {
      books,
      totalBooks,
      getDataBooks,
      listOfBooks,
      querySearch,
      personalization,
    } = useBookData()

    const state = reactive({
      pageCount: 0,
      pageDisabled: true,
      paginationTypeSimple: false,
      paginationTypeInfinity: false,
    })

    const preventMoreRequest = computed(() => {
      return state.pageDisabled
    })

    const listOfBooksBaseInTypePage = computed(() => {
      if (state.paginationTypeSimple === true) {
        return books
      }
      if (state.paginationTypeInfinity === true) {
        return listOfBooks
      }
    })
    const typeOfPagination = computed(() => {
      if (personalization.value.typePagination === 'Paginação Simples') {
        state.paginationTypeInfinity = false
        state.paginationTypeSimple = true
      }

      if (personalization.value.typePagination === 'Rolagem Infinita') {
        state.paginationTypeSimple = false
        state.paginationTypeInfinity = true
      }
    })
    function onBeforeEnter(el: any) {
      el.style.opacity = 0
    }

    function onEnterCard(el: any, done: any) {
      gsap.fromTo(
        el,
        {
          y: '50%',
        },
        {
          opacity: 1,
          y: 0,
          delay: el.dataset.index * 0.15,
          onComplete: done,
        }
      )
    }

    function onLeaveCard(el: any) {
      el.style.position = 'absolute'
      el.style.opacity = 0
    }

    function loadMore() {
      setTimeout(() => {
        state.pageDisabled = false

        state.pageCount += 20

        const resetList = false

        getDataBooks(querySearch.value.toString(), state.pageCount, resetList)
        state.pageDisabled = true
      }, 1000)
    }

    return {
      books,
      listOfBooks,
      totalBooks,
      listOfBooksBaseInTypePage,
      state,
      loadMore,
      personalization,
      preventMoreRequest,
      onBeforeEnter,
      onEnterCard,
      onLeaveCard,
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
