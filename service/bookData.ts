import { useContext, useStore, computed } from "@nuxtjs/composition-api";

import { StateProps as StateBook } from "~/store/bookData";
export interface StateProps {
  bookData: StateBook;
}

const API_KEY = "AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU";

export function useBookData() {
  const nuxtContext = useContext();

  const store = useStore<StateProps>();

  const books = computed(() => {
    return store.state.bookData.books;
  });

  async function getDataBooks(
    query: string,
    startIndex: number = 0,
    maxResults: number = 20
  ) {
    try {
      const data = await nuxtContext.$axios.$get("volumes", {
        params: {
          q: query,
          key: API_KEY,
          maxResults,
          startIndex,
        },
      });

      store.commit("bookData/SAVE_BOOKS", data);
    } catch (error) {
      console.log("Não foi possível buscar informações com o servidor");
    }
  }

  return {
    getDataBooks,
    books,
  };
}
