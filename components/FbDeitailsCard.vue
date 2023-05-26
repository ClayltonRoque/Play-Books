<template>
  <div class="play-books-details-card card is-desktop has-base-profile">
    <div class="card-content">
      <header class="card-header pb-2">
        <button
          class="button is-ghost has-text-brand-blue button-details is-size-6 is-uppercase"
          @click="goToPrev"
        >
          voltar
        </button>
        <a
          class="preview has-text-brand-blue button-details preview is-size-6 is-uppercase"
          :href="props.details.volumeInfo.previewLink"
          target="_blank"
        >
          preview
        </a>
      </header>
      <header class="card-header mb-4">
        <p class="title is-size-3 has-text-base-title card-header-title px-0">
          {{ props.details.volumeInfo.title }}
        </p>
      </header>
      <div class="media mt-5">
        <div class="media-left mr-5">
          <figure v-if="imageThumbnail">
            <img :src="imageThumbnail" />
          </figure>
          <figure v-else>
            <img src="@/assets/no-image.png" />
          </figure>
        </div>
        <div class="media-content">
          <div class="columns">
            <div class="column">
              <div class="content">
                <p class="title is-size-5 has-text-base-title pb-2">Autor</p>

                <div
                  v-if="
                    props.details.volumeInfo.authors &&
                    props.details.volumeInfo.authors.length
                  "
                  class="subtitle has-text-base-subtitle"
                >
                  <p>{{ props.details.volumeInfo.authors[0] }}</p>
                </div>

                <p v-else class="subtitle has-text-base-subtitle">authors</p>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <p class="title is-size-5 has-text-base-title pb-2">Editora</p>
                <div
                  v-if="
                    props.details.volumeInfo.publisher &&
                    props.details.volumeInfo.publisher.length
                  "
                  class="subtitle has-text-base-subtitle"
                >
                  <p>
                    {{ props.details.volumeInfo.publisher }}
                  </p>
                </div>
                <p v-else class="subtitle has-text-base-subtitle">publisher</p>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <p class="title is-size-5 has-text-base-title pb-2">
                  Categorias
                </p>
                <div
                  v-if="
                    props.details.volumeInfo.categories &&
                    props.details.volumeInfo.categories.length
                  "
                  class="subtitle has-text-base-subtitle"
                >
                  <p>{{ props.details.volumeInfo.categories[0] }}</p>
                </div>
                <p v-else class="subtitle has-text-base-subtitle">categories</p>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="content">
                <p class="title is-size-5 has-text-base-title pb-2">Idioma</p>
                <div
                  v-if="
                    props.details.volumeInfo.language &&
                    props.details.volumeInfo.language.length
                  "
                  class="subtitle has-text-base-subtitle"
                >
                  <p>{{ props.details.volumeInfo.language }}</p>
                </div>
                <p v-else class="subtitle has-text-base-subtitle">language</p>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <p class="title is-size-5 has-text-base-title pb-2">
                  Publicado em
                </p>
                <div
                  v-if="
                    props.details.volumeInfo.publishedDate &&
                    props.details.volumeInfo.publishedDate.length
                  "
                  class="subtitle has-text-base-subtitle"
                >
                  <p>{{ props.details.volumeInfo.publishedDate }}</p>
                </div>
                <p v-else class="subtitle has-text-base-subtitle">
                  publisherDate
                </p>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <p class="title is-size-5 has-text-base-title pb-2">Páginas</p>
                <div
                  v-if="props.details.volumeInfo.pageCount"
                  class="subtitle has-text-base-subtitle"
                >
                  <p>{{ props.details.volumeInfo.pageCount }}</p>
                </div>
                <p v-else class="subtitle has-text-base-subtitle">pageCount</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FbButtonSaveBook
          class="is-align-content-center is-size-6"
          :book="props.details"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp, PropType } from '#app'
import { useVolume } from '@/service/volume'

const {nuxt2Context} = useNuxtApp()
const props = defineProps({
  details: {
    type: Object as PropType<BookDocument.Volume>,
    required: true,
  },
})

const { imageThumbnail } = useVolume(props.details)

function goToPrev() {
  const fromPath = nuxt2Context.from?.fullPath
  nuxt2Context.redirect(fromPath || '/')
}
</script>

<style lang="scss">
.play-books-details-card {
  border: 1px solid #112131;
  &:hover {
    border-color: $brand-blue;
  }

  .card-header {
    justify-content: space-between;
  }

  .card-header-title {
    border-bottom: 2px solid $brand-blue;
  }

  .button-icon {
    display: flex;
    width: 18px;
    height: 18px;
    align-items: center;
  }

  .button-details {
    display: flex;
    align-items: center;
  }

  .preview {
    padding: 7px 16px;
    &:hover {
      text-decoration: underline;
      color: $brand-blue !important;
    }
  }

  img {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    height: 200px;
    width: 100%;
    max-width: 150px;

    border: 1px solid #112131;
    &:hover {
      border-color: #00acee;
    }

    &:disabled {
      opacity: 0;
      transform: scale(0);
    }

    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }

    transition: all 0.2s;
  }

  .media {
    .media-content {
      overflow: hidden;
    }

    @media (max-width: 380px) {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
}
</style>
