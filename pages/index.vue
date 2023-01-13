<template>
  <div>
    <pre>{{ books }}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

import { useBookData } from "~/service/bookData";

export default defineComponent({
  setup() {
    const { books } = useBookData();
    return {
      books,
    };
  },
});
</script>

<style lang="scss" scoped></style>
