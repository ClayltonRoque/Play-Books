import { useContext, reactive } from "@nuxtjs/composition-api";

export function useBookData() {
  const nuxtContext = useContext();
  const index = 0;
  const apiKey = "AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU";
  const defaultMaxResults = "20";
  const state = reactive({
    books: [],
    query: "",
  });
  async function getDataBooks() {
    try {
      const data = await nuxtContext.$axios.$get("volumes", {
        params: {
          q: state.query,
          key: apiKey,
          maxResults: defaultMaxResults,
          startIndex: index,
        },
      });
      console.log(data.items);
      state.books = data;
    } catch (error) {
      console.log("Não foi possível buscar informações com o servidor");
    }
  }

  return {
    state,
    getDataBooks,
  };
}
