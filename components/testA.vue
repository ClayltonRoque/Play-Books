<template>
  <div class="item-card">
    <h3>{{ book.volumeInfo.title }}</h3>
    <p>{{ book.volumeInfo.description }}</p>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  setup() {},
})
</script>

<style scoped>
.item-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}
.item-card img {
  max-width: 100%;
  height: auto;
}
.item-card h3 {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}
.item-card p {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}
</style>
