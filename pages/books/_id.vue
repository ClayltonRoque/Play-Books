<template>
  <section class="play-books-details container">
    <div class="books-details-container py-5">
      <DetailsCard />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import DetailsCard from '../../components/DetailsCard.vue';

export default defineComponent({
  name: 'PlayBookDetails',
  components: { DetailsCard },
  setup() {

    return {
    }
  },
})
</script>

<style lang="scss">
.play-books-details {
  top: 86px;
  padding: 0px 2rem;

  .books-details-container {
    max-width: 52rem;
    width: 100%;
    margin: 0 auto;
    border: 0;
  }
}
</style>
