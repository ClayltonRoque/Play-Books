<template>
  <div>
    <pre>{{ storeBooks }}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, useStore, computed } from "@nuxtjs/composition-api";

import { StateProps as StateBook } from "~/store/bookData";

export interface StateProps {
  bookData: StateBook;
}

export default defineComponent({
  setup() {
    const store = useStore<StateProps>();
    const storeBooks = computed(() => {
      return store.state.bookData.books;
    });
    return {
      storeBooks,
    };
  },
});
</script>

<style lang="scss" scoped></style>
