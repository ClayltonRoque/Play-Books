import { useContext, ref } from "@nuxtjs/composition-api";

export function useBookData() {
  const nuxtContext = useContext();
  const index = 0;
  const apiKey = "AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU";
  const defaultMaxResults = "20";
  const state = ref({
    books: [],
    query: "",
  });
  async function getDataBooks() {
    try {
      const data = await nuxtContext.$axios.$get("volumes", {
        params: {
          q: state.value.query,
          key: apiKey,
          maxResults: defaultMaxResults,
          startIndex: index,
        },
      });
      state.value.books = data;
      console.log(state.value.query);
      console.log(
        data.items.map((item: any) => {
          return item.volumeInfo;
        })
      );
    } catch (error) {
      console.log("Não foi possível buscar informações com o servidor");
    }
  }

  return {
    state,
    getDataBooks,
  };
}
