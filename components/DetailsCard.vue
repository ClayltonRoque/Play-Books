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
          :href="details.volumeInfo.previewLink"
          target="_blank"
        >
          preview
        </a>
      </header>
      <header class="card-header mb-4">
        <p class="title is-size-3 has-text-base-title card-header-title px-0">
          {{ details.volumeInfo.title }}
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
                    details.volumeInfo.authors &&
                    details.volumeInfo.authors.length
                  "
                  class="subtitle has-text-base-subtitle"
                >
                  <p>{{ details.volumeInfo.authors[0] }}</p>
                </div>

                <p v-else class="subtitle has-text-base-subtitle">authors</p>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <p class="title is-size-5 has-text-base-title pb-2">Editora</p>
                <div
                  v-if="
                    details.volumeInfo.publisher &&
                    details.volumeInfo.publisher.length
                  "
                  class="subtitle has-text-base-subtitle"
                >
                  <p>
                    {{ details.volumeInfo.publisher }}
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
                    details.volumeInfo.categories &&
                    details.volumeInfo.categories.length
                  "
                  class="subtitle has-text-base-subtitle"
                >
                  <p>{{ details.volumeInfo.categories[0] }}</p>
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
                    details.volumeInfo.language &&
                    details.volumeInfo.language.length
                  "
                  class="subtitle has-text-base-subtitle"
                >
                  <p>{{ details.volumeInfo.language }}</p>
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
                    details.volumeInfo.publishedDate &&
                    details.volumeInfo.publishedDate.length
                  "
                  class="subtitle has-text-base-subtitle"
                >
                  <p>{{ details.volumeInfo.publishedDate }}</p>
                </div>
                <p v-else class="subtitle has-text-base-subtitle">
                  publisherDate
                </p>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <p class="title is-size-5 has-text-base-title pb-2">P??ginas</p>
                <div
                  v-if="details.volumeInfo.pageCount"
                  class="subtitle has-text-base-subtitle"
                >
                  <p>{{ details.volumeInfo.pageCount }}</p>
                </div>
                <p v-else class="subtitle has-text-base-subtitle">pageCount</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ButtonSaveBook
          class="is-align-content-center is-size-6"
          :book="details"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useVolume } from '@/service/volume'
import {
defineComponent,
PropType,
useContext
} from '@nuxtjs/composition-api'
import ButtonSaveBook from '~/components/ButtonSaveBook.vue'

export default defineComponent({
  name: 'PlayBookDetailsCard',
  components: {
    ButtonSaveBook,
  },
  props: {
    details: {
      type: Object as PropType<BookDocument.Volume>,
      required: true,
    },
  },
  setup(props) {
    const nuxtContext = useContext()
    const { imageThumbnail } = useVolume(props.details)

    function goToPrev() {
      const fromPath = nuxtContext.from.value?.fullPath
      nuxtContext.redirect(fromPath || '/')
    }

    return {
      goToPrev,
      imageThumbnail,
    }
  },
})
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
