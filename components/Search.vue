<template>
  <div class="play-book-search">
    <input
      class="input"
      type="text"
      placeholder="Pesquisar livros"
      v-model="state.query"
    />
    <button @click="getDataBooks">click</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { useBookData } from "~/service/bookData";

export default defineComponent({
  name: "playBookSearch",
  model: {
    prop: "query",
    event: "input",
  },
  setup(_props, context) {
    function input(event: any) {
      const text = event.target.value;
      context.emit("input", text);
      text.length > 3 && context.emit("submit", true);
    }
    const { state, getDataBooks } = useBookData();

    return {
      input,
      state,
      getDataBooks,
    };
  },
});
</script>
