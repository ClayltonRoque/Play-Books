<template>
  <div>
    <pre>{{ storeBooks }}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

import { useBookData } from "~/service/bookData";

export default defineComponent({
  setup() {
    const { storeBooks } = useBookData();
    return {
      storeBooks,
    };
  },
});
</script>

<style lang="scss" scoped></style>
