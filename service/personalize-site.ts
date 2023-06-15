import { usePersonalizeSiteStore, StateProps } from '@/store/personalize-site'

export function usePersonalizeSiteService() {
  const personalizeSiteStore = usePersonalizeSiteStore()

  const personalizationValues = computed(() => {
    return personalizeSiteStore.personalizeSiteTypes
  })

  const state = reactive({
    personalizeType: {
      typeSearch: 'Titulo',
      typePagination: 'Paginação Simples',
    },
  })

  function personalizationValuesSet(personalizeSite: StateProps) {
    if (personalizeSite.typeSearch === 'Titulo') {
      state.personalizeType.typeSearch = 'intitle:'
    }
    if (personalizeSite.typeSearch === 'Autor') {
      state.personalizeType.typeSearch = 'inauthor:'
    }
    if (personalizeSite.typeSearch === 'ISBN') {
      state.personalizeType.typeSearch = 'isbn:'
    }

    if (personalizeSite.typePagination === 'Paginação Simples') {
      state.personalizeType.typePagination = 'Paginação Simples'
    }

    if (personalizeSite.typePagination === 'Rolagem Infinita') {
      state.personalizeType.typePagination = 'Rolagem Infinita'
    }

    const personalizeType = { ...state.personalizeType }

    personalizeSiteStore.setPersonalizeSite(personalizeType)
  }

  return {
    personalizationValues,
    personalizationValuesSet,
  }
}
