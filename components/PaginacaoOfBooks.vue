<template>
  <section>
    <hr />
    <b-pagination
      v-model="current"
      :total="state.total"
      :range-before="state.rangeBefore"
      :range-after="state.rangeAfter"
      :order="state.order"
      :per-page="state.perPage"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
    </b-pagination>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from '@nuxtjs/composition-api'

import { useBookData } from '~/service/bookData'

export default defineComponent({
  name: 'PaginaOfBooks',

  setup() {
    const { totalBooks, getDataBooks, querySearch } = useBookData()

    const state = reactive({
      total: totalBooks,
      perPage: 20,
      rangeBefore: 2,
      rangeAfter: 2,
      order: 'is-centered',
    })

    const current = ref(0)

    const query = querySearch

    watch(current, (currentValue) => {
      const startIndex =
        currentValue === 1 ? (currentValue = 0) : currentValue * 20 - 20
      const maxResults = 20
      getDataBooks(query.value.toString(), startIndex, maxResults)
    })

    return {
      state,
      current,
    }
  },
})
</script>
