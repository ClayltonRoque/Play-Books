<template>
  <div v-infinite-scroll="infiniteHandler">
    <div v-for="item in items" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script>
import InfiniteScroll from 'vue-infinite-scroll'

export default {
  directives: {
    InfiniteScroll
  },
  data() {
    return {
      items: [],
      page: 0
    }
  },
  methods: {
    infiniteHandler() {
      // Chama a API para carregar mais dados
      axios.get(`/api/data?page=\${this.page}`).then(response => {
        this.items = [...this.items, ...response.data]
        this.page++
      })
    }
  }
}
</script>