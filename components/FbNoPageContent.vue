<template>
  <div class="play-books-no-page">
    <div class="no-page-content">
      <div class="no-page">
        <figure>
          <img src="~/assets/no-search.png" />
        </figure>
        <p
          v-if="notfound === 'true'"
          class="title is-size-5 has-text-base-title pb-2"
        >
          <button
            class="button is-ghost has-text-brand-blue button-details is-size-6 is-uppercase"
            @click="goToHome"
          >
            Página não encontrada, voltar para home!
          </button>
        </p>
        <p v-else class="title is-size-5 has-text-base-title pb-2">
          {{ title }}
        </p>
        <p class="subtitle has-text-base-subtitle">
          Pesquise e navegue pela lista de livros do Google Play Books
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PlayBooksNoPage',
  props: {
    title: {
      type: String,
      required: true,
    },
    notfound: {
      type: String,
      required: true,
    },
  },
  setup() {
    const nuxtContext = useContext()

    function goToHome() {
      nuxtContext.redirect('/')
    }

    return {
      goToHome,
    }
  },
})
</script>

<style lang="scss">
.play-books-no-page {
  .no-page-content {
    @include mobile {
      .no-page {
        margin: 0.5rem;
        text-align: center;
      }
    }
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
</style>
