<template>
  <section class="play-books-details container py-5">
    <div v-if="details" class="books-details-container px-5">
      <div v-if="details">
        <DetailsCard :details="details" />
      </div>
      <div class="details-content">
        <p class="title is-size-5 has-text-base-title pb-2">
          {{ details?.volumeInfo.title }}
        </p>
        <div class="subtitle has-text-base-subtitle">
          {{ details?.volumeInfo.description }}
        </div>
      </div>
    </div>
    <div v-else class="books-details-container px-5">
      <div class="no-page-content">
        <div class="no-page">
          <figure>
            <img src="../../assets/no-search.png" />
          </figure>
          <p class="title is-size-5 has-text-base-title pb-2">
            Página não encontrada!
          </p>
          <p class="subtitle has-text-base-subtitle">
            Pesquise e navegue pela lista de livros do Google Play Books
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useRoute,
  useFetch,
  useContext,
  useStore,
} from '@nuxtjs/composition-api'
import DetailsCard from '../../components/DetailsCard.vue'

export default defineComponent({
  name: 'PlayBookDetails',
  components: { DetailsCard },
  setup() {
    const nuxtContext = useContext()
    const route = useRoute()
    const params = route.value.params
    const details = ref<BookDocument.Volume>()
    const store = useStore()

    useFetch(async () => {
      store.dispatch('siteData/block')
      try {
        const { data } = await nuxtContext.$axios.get(`volumes/${params.id}`)
        details.value = data
      } catch (error) {
        // nuxtContext.redirect('/')
        console.log('Não foi possível buscar informações com o servidor')
      } finally {
        store.dispatch('siteData/unBlock')
      }
    })
    return {
      details,
    }
  },
})
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
