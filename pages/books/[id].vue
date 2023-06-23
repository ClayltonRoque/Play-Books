<template>
  <section class="play-books-details container">
    <div v-if="state.book" class="books-details-container px-5">
      <BooksDetails :book="state.book" />
      <div class="details-content">
        <p
          class="title is-size-5 has-text-base-title pb-2"
          v-html="state.book.volumeInfo.title"
        ></p>
        <div
          class="subtitle has-text-base-subtitle"
          v-html="state.book.volumeInfo.description"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface StateProps {
  book: BookDocument.Volume | null
}
const route = useRoute()
const params = route.params

const state = reactive<StateProps>({
  book: null,
})

const { data } = await useFetch<BookDocument.Volume | null>(
  `https://www.googleapis.com/books/v1/volumes/${params.id}`
)

state.book = data.value
</script>

<style lang="scss">
.play-books-details {
  top: 86px;
  margin-bottom: 8rem;

  .books-details-container {
    max-width: 52rem;
    width: 100%;
    margin: 0 auto;
    border: 0;

    .details-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2.5rem 2rem;

      p {
        line-height: 160% !important;
      }
    }

    .no-page-content {
      padding-top: 10rem;
      .no-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
          opacity: 0.3;
        }

        .title {
          font-weight: 700;
          opacity: 0.5;
        }

        .subtitle {
          opacity: 0.5;
        }
      }
    }
  }
}
</style>
