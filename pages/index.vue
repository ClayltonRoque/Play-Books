<template>
  <section class="play-books-home container" style="top: 86px">
    <div>
      <TransitionGroup
        class="columns is-multiline align-items-full py-5"
        tag="div"
        :css="false"
        @before-enter="onBeforeEnter"
        @leave="onLeaveCard"
        @enter="onEnterCard"
      >
        <div
          v-for="(book, index) in books"
          :key="book.id"
          class="column book-column is-4-desktop is-12-tablet is-justify-content-center is-3"
          :data-index="index"
        >
          <PlayBookCard :book="book" class="play-book-card" />
        </div>
      </TransitionGroup>
    <div v-if="books.length" class="columns is-multiline align-items-full py-5">
      <PlayBookCard
        v-for="(book, index) in books"
        :key="index"
        :book="book"
        class="play-book-card column is-4-desktop is-12-tablet is-justify-content-center is-3"
      />
      <div v-if="state.paginationTypeSimple">
        <div class="columns is-multiline align-items-full py-5">
          <PlayBookCard
            v-for="(book, index) in listOfBooks"
            :key="index"
            :book="book"
            class="play-book-card column is-4-desktop is-12-tablet is-justify-content-center is-3"
          />
          <div>
            <BooksPagination />
          </div>
        </div>
      </div>
      <div v-else>
        <NoPageContent
          title="Você ainda não pesquisou livros"
          notfound="false"
        />
      </div>
    </div>

    <div v-if="state.paginationTypeInfinity">
      <div class="columns is-multiline align-items-full py-5">
        <PlayBookCard
          v-for="(book, index) in listOfBooks"
          :key="index"
          :book="book"
          class="play-book-card column is-4-desktop is-12-tablet is-justify-content-center is-3"
        />
      </div>

      <infinite-loading
        v-if="books.length"
        :v-infinite-scroll-disabled="preventMoreRequest"
        force-use-infinite-wrapper=".el-table__body-wrapper"
        spinner="waveDots"
        @distance="1"
        @infinite="loadMore"
      ></infinite-loading>
    </div>

    <div v-else>
      <NoPageContent title="Você ainda não pesquisou livros" notfound="false" />
    </div>
  </section>
</template>

<script lang="ts">


import { defineComponent, reactive, computed } from '@nuxtjs/composition-api'
import gsap from 'gsap'
import { useBookData } from '~/service/bookData'

import PlayBookCard from '~/components/BookCard.vue'
import NoPageContent from '~/components/NoPageContent.vue'


export default defineComponent({
  name: 'PlayBookSearch',
  components: { PlayBookCard, NoPageContent },
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
      // gsap.to(el, {
      //   opacity: 0,
      // })
    }

    const preventMoreRequest = computed(() => {
      return state.pageDisabled
    })

    if (personalization.value.typePagination === 'Paginação Simples') {
      state.paginationTypeInfinity = false
      state.paginationTypeSimple = true
    }

    if (personalization.value.typePagination === 'Rolagem Infinita') {
      state.paginationTypeSimple = false
      state.paginationTypeInfinity = true
    }

    function loadMore() {
      setTimeout(() => {
        state.pageDisabled = false
        state.pageCount += 20
        getDataBooks(querySearch.value.toString(), state.pageCount)
        state.pageDisabled = true
      }, 1000)
    }
    return {
      books,
      listOfBooks,
      totalBooks,
      state,
      onEnterCard,
      onBeforeEnter,
      onLeaveCard,
      loadMore,
      preventMoreRequest,
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
