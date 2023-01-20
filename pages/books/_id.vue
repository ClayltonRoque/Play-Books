<template>
  <section class="play-books-details container py-5">
    <div class="books-details-container px-5">
      <div v-if="details">
        <DetailsCard :details="details" />
      </div>
      <div class="details-content">
        <p
          v-if="details?.volumeInfo.title"
          class="title is-size-5 has-text-base-title pb-2"
        >
          {{ details?.volumeInfo.title }}
        </p>
        <p v-else class="title is-size-5 has-text-base-title pb-2">
          Find the perfect search engine to find your next book
        </p>
        <p
          v-if="details?.volumeInfo.description"
          class="subtitle has-text-base-subtitle"
        >
          {{ details?.volumeInfo.description }}
        </p>
        <p v-else class="subtitle has-text-base-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          soluta fugiat quas aut? Ea iusto, dolorum fugit consequatur fugiat
          harum? Provident minus magni laborum saepe et labore aperiam quisquam
          architecto?
        </p>
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
    useFetch(async () => {
      const { data } = await nuxtContext.$axios.get(`volumes/${params.id}`)
      details.value = data
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
  }
}
</style>
