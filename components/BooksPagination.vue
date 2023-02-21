<template>
  <section>
    <hr />
    <b-pagination
      v-model="state.page"
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
import { defineComponent, reactive, watch } from '@nuxtjs/composition-api'

import { useBookData } from '~/service/bookData'

export default defineComponent({
  name: 'BooksPagination',

  setup() {
    const { totalBooks, getDataBooks, querySearch } = useBookData()

    const state = reactive({
      page: 1,
      total: totalBooks,
      perPage: 20,
      rangeBefore: 2,
      rangeAfter: 2,
      order: 'is-centered',
    })

    watch(
      () => state.page,
      (nextCurrentPage) => {
        let startIndex = 0
        const query = querySearch.value.toString()

        if (nextCurrentPage > 1) {
          startIndex = (nextCurrentPage - 1) * state.page
        }

        getDataBooks(query, startIndex)
      }
    )

    return {
      state,
    }
  },
})
</script>
