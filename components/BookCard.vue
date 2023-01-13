<template>
  <div class="play-book-bookcard">
    <Nuxt-link :to="{ name: 'details-id', params: { id: book.id } }">
      <div class="card is-desktop">
        <div class="card-content">
          <div class="columns">
            <div class="column">
              <img :src="book.volumeInfo.imageLinks.thumbnail" />
            </div>
            <div class="column">
              <div class="content">
                <p class="title is-size-4 has-text-base-title">
                  {{ book.volumeInfo.title }}
                </p>
                <p class="subtitle has-text-base-subtitle">
                  {{ book.volumeInfo.authors }}
                </p>
                <p class="description has-text-base-text is-size-6">
                  {{ book.volumeInfo.description }}
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
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'playBookCard',
  props: ['book'],
  setup() {
    return {}
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
    height: 100%;

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

  .title {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .subtitle {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  .description {
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
  }
}
</style>