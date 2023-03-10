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
              <!-- <Nuxt-link
                :to="{ name: 'books-id', params: { id: book.id } }"
              > -->
              <p class="title title-card is-size-4 has-text-base-title">
                {{ book.volumeInfo.title }}
              </p>
              <div
                v-if="book.volumeInfo.authors && book.volumeInfo.authors.length"
              >
                <p class="subtitle subtitle-card has-text-base-subtitle">
                  {{ book.volumeInfo.authors[0] }}
                </p>
              </div>
              <p v-else class="subtitle subtitle-card has-text-base-subtitle">
                Author
              </p>
              <!-- Transição Básica -->
              <p
                v-if="book.volumeInfo.description"
                ref="description"
                key="description-card"
                class="description description-card has-text-base-text is-size-6"
              >
                {{ book.volumeInfo.description }}
              </p>
              <button @click="toggleSeenLess">Ler Menos</button>
              <!-- <p
                  v-else
                  class="description description-card has-text-base-text is-size-6"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p> -->
              <!-- </Nuxt-link> -->
            </div>
          </div>
        </div>
      </div>
      <ButtonSaveBook :book="book" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  ref,
} from '@nuxtjs/composition-api'
import gsap from 'gsap'

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
    const description = ref<HTMLElement>()

    const state = reactive({
      seenLess: false,
    })

    function toggleSeenLess() {
      state.seenLess = !state.seenLess
      if (description.value) {
        gsap.to(description.value, {
          opacity: state.seenLess ? 0 : 1,
          duration: 1,
        })
      }
    }

    return {
      state,
      description,
      imageThumbnail,
      toggleSeenLess,
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
  .read-less-leave-active {
    transition: all 1s ease;
  }

  .read-less-leave-to {
    transform: translateY(50%);
    opacity: 0;
  }
  .read-less-enter-active {
    transform: translateY(50%);
    opacity: 0;
    transition: all 1s ease;
  }
  .read-less-enter-to {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>
