<template>
  <div class="play-books-btn-favorite-save mt-2">
    <button
      v-if="!alreadyfavorite(props.book)"
      class="button is-align-content-center is-size-6"
      @click="saveBooks(props.book)"
    >
      Favoritar
      <!-- <font-awesome-icon class="pl-1" icon="fa-solid fa-heart-circle-plus" /> -->
    </button>
    <button
      v-else
      class="button is-brand-red is-align-content-center is-size-6"
      @click="removeBook(props.book)"
    >
      Remover
      <!-- <font-awesome-icon class="pl-1" icon="fa-solid fa-heart-circle-xmark" /> -->
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  book: {
    type: Object as PropType<BookDocument.Volume>,
    required: true,
  },
})

function saveBooks() {}
function alreadyfavorite() {}
function removeBook() {}
</script>

<style lang="scss">
.play-books-btn-favorite-save {
  position: absolute;
  bottom: 1rem;
  right: 0.5rem;
}
</style>
