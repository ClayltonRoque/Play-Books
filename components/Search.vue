<template>
  <div class="play-book-search">
    <form @submit.prevent="submit">
      <input
        class="input"
        type="text"
        placeholder="Pesquisar livros"
        v-model="state.query"
      />
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, useStore } from "@nuxtjs/composition-api";

import { useBookData } from "~/service/bookData";

import { StateProps as StateBook } from "~/store/bookData";

export interface StateProps {
  bookData: StateBook;
}

export default defineComponent({
  name: "playBookSearch",
  setup() {
    const { state, getDataBooks } = useBookData();

    const store = useStore<StateProps>();

    async function submit() {
      await getDataBooks();
      const submitBook = {
        ...state.books,
      };
      store.commit("bookData/SAVE_BOOKS", submitBook);
    }

    return {
      state,
      getDataBooks,
      submit,
    };
  },
});
</script>
