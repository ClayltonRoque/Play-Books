<template>
  <section class="play-books-details container">
    <div v-if="details" class="books-details-container px-5">
      <div v-if="details">
        <DetailsCard :details="details" />
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
      <NoPageContent
        title="Página não encontrada, voltar para home!"
        notfound="true"
      />
    </div>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useContext,
  useFetch,
  useRoute,
  useStore,
} from '@nuxtjs/composition-api'
import DetailsCard from '../../components/DetailsCard.vue'
import NoPageContent from '../../components/NoPageContent.vue'

export default defineComponent({
  name: 'PlayBookDetails',
  components: { DetailsCard, NoPageContent },
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
        console.log('Não foi possível buscar informações com o servidor')
        nuxtContext.redirect('/')
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
