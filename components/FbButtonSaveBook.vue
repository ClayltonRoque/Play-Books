<template>
  <div class="play-book-button-save mt-2">
    <button
      v-if="!alreadyfavorite(props.book)"
      class="button is-align-content-center is-size-6"
      @click="saveBooks(props.book)"
    >
      Favoritar
      <b-field icon-pack="icomoon" icon-right="playBookheart"></b-field>
    </button>
    <button
      v-else
      class="button is-brand-red is-align-content-center is-size-6"
      @click="removeBook(props.book)"
    >
      Remover
      <fa class="pl-1" icon="fa-solid fa-heart-circle-xmark" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { PropType } from '#app'
import { useBookData } from '../service/bookData'

const { saveBooks, alreadyfavorite, removeBook } = useBookData()
const props = defineProps({
  book: {
    type: Object as PropType<BookDocument.Volume>,
    required: true,
  },
})
</script>

<style lang="scss">
.play-book-button-save {
  position: absolute;
  bottom: 1rem;
  right: 0.5rem;
}
</style>
