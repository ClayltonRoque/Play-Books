import {
  useContext,
  reactive,
  useStore,
  computed,
} from "@nuxtjs/composition-api";
import { StateProps as StateBook } from "~/store/bookData";
export interface StateProps {
  bookData: StateBook;
}

export function useBookData() {
  const nuxtContext = useContext();

  const state = reactive({
    books: [],
    query: "",
  });

  const store = useStore<StateProps>();

  const storeBooks = computed(() => {
    return store.state.bookData.books;
  });

  async function getDataBooks() {
    const index = 0;
    const apiKey = "AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU";
    const defaultMaxResults = "20";

    try {
      const data = await nuxtContext.$axios.$get("volumes", {
        params: {
          q: state.query,
          key: apiKey,
          maxResults: defaultMaxResults,
          startIndex: index,
        },
      });
      state.books = data;
    } catch (error) {
      console.log("Não foi possível buscar informações com o servidor");
    }
  }

  return {
    state,
    getDataBooks,
    storeBooks,
  };
}
