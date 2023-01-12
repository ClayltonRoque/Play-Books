<template>
  <div class="control py-4" style="display: flex; width: 70%; gap: 1rem">
    <input
      class="input"
      type="text"
      placeholder="Pesquisar livros"
      v-model="state.query"
    />
    <button class="button is-align-content-center" @click="getDataBooks">Pesquisar</button>
</div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { useBookData } from "../service/bookData";

export default defineComponent({
name: "playBookSearch",
setup() {
  const { state, getDataBooks } = useBookData();

  return {
    state,
    getDataBooks,
  };
},
});
</script>
