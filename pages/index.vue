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
    </div>
    <BooksPagination v-if="totalBooks" />
    <div v-else>
      <NoPageContent title="Você ainda não pesquisou livros" notfound="false" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from '@nuxtjs/composition-api'
import gsap from 'gsap'

import { useBookData } from '~/service/bookData'

import PlayBookCard from '~/components/BookCard.vue'
import NoPageContent from '~/components/NoPageContent.vue'
import BooksPagination from '~/components/BooksPagination.vue'

export default defineComponent({
  name: 'PlayBookSearch',
  components: { PlayBookCard, NoPageContent, BooksPagination },
  setup() {
    const { books, totalBooks } = useBookData()
    const state = reactive({
      activePagination: false,
    })

    watch(books, () => {
      if (books.value.length) {
        state.activePagination = true
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
      // gsap.to(el, {
      //   opacity: 0,
      // })
    }

    return {
      books,
      totalBooks,
      state,
      onEnterCard,
      onBeforeEnter,
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
