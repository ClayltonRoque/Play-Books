<template>
  <div>
    <ul>
      <li 
        style="cursor: pointer;"
        v-for="(item, index) in state.books"
        :key="index"
      >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { useBookData } from "../service/bookData";

export default defineComponent({
  name: "playBookSearch",

  setup() {
    const { state } = useBookData();

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped></style>
