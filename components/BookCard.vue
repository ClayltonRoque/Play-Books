<template>
  <div class="play-book-bookcard">
    <div class="card is-desktop">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <Nuxt-link :to="{ name: 'books-id', params: { id: book.id } }">
              <figure
                v-if="imageThumbnail && imageThumbnail.length"
                class="media"
                style="border-top: 0; padding-top: 0"
              >
                <img :src="imageThumbnail" />
              </figure>
              <figure v-else>
                <img src="@/assets/no-image.png" />
              </figure>
            </Nuxt-link>
          </div>
          <div class="media-content">
            <div class="content">
              <Nuxt-link :to="{ name: 'books-id', params: { id: book.id } }">
                <p class="title title-card is-size-4 has-text-base-title">
                  {{ book.volumeInfo.title }}
                </p>
                <div
                  v-if="
                    book.volumeInfo.authors && book.volumeInfo.authors.length
                  "
                >
                  <p class="subtitle subtitle-card has-text-base-subtitle">
                    {{ book.volumeInfo.authors[0] }}
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
              </Nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <ButtonSaveBook :book="book"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

import ButtonSaveBook from '~/components/ButtonSaveBook.vue'

import { useVolume } from '@/service/volume'

export default defineComponent({
  name: 'PlayBookCard',
  components: {
    ButtonSaveBook,
  },
  props: {
    book: {
      type: Object as PropType<BookDocument.Volume>,
      required: true,
    },
  },
  setup(props) {
    const { imageThumbnail } = useVolume(props.book)

    return {
      imageThumbnail,
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
    height: 200px;
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
  .content p {
    margin-bottom: 0rem;
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
    margin-bottom: auto;
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
    max-width: 392px;
    border: 1px solid #112131;
    &:hover {
      border-color: #00acee;
    }
    .media {
      .media-left {
        max-width: 183px;
      }
      .media-content {
        overflow: hidden; 
        .content {
          margin-bottom: 2.5rem;
        }
      }
    }

    @media (max-width: 768px) {
      max-width: 350px;
    }
  }
}
</style>
