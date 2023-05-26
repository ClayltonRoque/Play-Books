<template>
  <section class="play-books-details container">
    <div v-if="details" class="books-details-container px-5">
      <div v-if="details">
        <FbDeitailsCard :details="details" />
      </div>
      <div class="details-content">
        <p
          class="title is-size-5 has-text-base-title pb-2"
          v-html="details?.volumeInfo.title"
        ></p>
        <div
          class="subtitle has-text-base-subtitle"
          v-html="details?.volumeInfo.description"
        ></div>
      </div>
    </div>
    <div v-else>
      <FbNoPageContent
        title="Página não encontrada, voltar para home!"
        notfound="true"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, useLazyFetch, useRoute, useNuxtApp } from '#app'

const route = useRoute()
const { $store } = useNuxtApp()
const params = route.params
const details = ref()

const { data, pending } = useLazyFetch<BookDocument.Volume>(
  `https://www.googleapis.com/books/v1/volumes/${params.id}`
)

if (pending) {
  $store.dispatch('siteData/block')
  details.value = data
  $store.dispatch('siteData/unBlock')
}
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
