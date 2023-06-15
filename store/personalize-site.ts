import { defineStore } from 'pinia'

export interface StateProps {
  typeSearch: String
  typePagination: String
}

export const usePersonalizeSiteStore = defineStore('personalizeSite', () => {
  const personalizeSiteTypes = ref({
    typeSearch: 'intitle:',
    typePagination: 'Paginação Simples',
  } as StateProps)

  function setPersonalizeSite(payload: StateProps) {
    personalizeSiteTypes.value = payload
  }

  return {
    personalizeSiteTypes,
    setPersonalizeSite,
  }
})
