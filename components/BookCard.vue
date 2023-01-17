<template>
  <div class="play-book-bookcard">
    <Nuxt-link :to="{ name: 'details-id', params: { id: book.id } }">
      <div class="card is-desktop">
        <div class="card-content">
          <div class="columns">
            <div class="column">
              <img :src="imageBook" />
            </div>
            <div class="column" style="overflow: hidden;">
              <div class="content">
                <p class="title title-card is-size-4 has-text-base-title">
                  {{ book.volumeInfo.title }}
                </p>
                <div
                  v-if="
                    book.volumeInfo.authors && book.volumeInfo.authors.length
                  "
                >
                  <p
                    v-for="(author, index) in authors"
                    :key="index"
                    class="subtitle subtitle-card has-text-base-subtitle"
                  >
                    {{ author }}
                  </p>
                </div>
                <p v-else class="subtitle subtitle-card has-text-base-subtitle">
                  Author
                </p>
                <p
                  v-if="book.volumeInfo.description"
                  class="description description-card has-text-base-text is-size-6"
                >
                  {{ book.volumeInfo.description }}
                </p>
                <p
                  v-else
                  class="description description-card has-text-base-text is-size-6"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

import { useVolume } from '@/service/volume'

export default defineComponent({
  name: 'PlayBookCard',
  props: {
    book: {
      type: Object as PropType<BookDocument.Volume>,
      required: true,
    },
  },
  setup(props) {
    const imageBook =
      props.book.volumeInfo.imageLinks &&
      props.book.volumeInfo.imageLinks.smallThumbnail

    const { authors } = useVolume(props.book)

    return {
      authors,
      imageBook,
    }
  },
})
</script>

<style lang="scss">
.play-book-bookcard {
  img {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    border: 1px solid #112131;
    max-height: 200px;
    width: 100%;
    max-width: 150px;

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
  .title-card {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .subtitle-card {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .description-card {
    height: fit-content;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .card {
    height: 254px;
    max-width: 392px;
    border: 1px solid #112131;
    &:hover {
      border-color: #00acee;
    }
  }
}
</style>
