import { defineStore } from 'pinia'

export const userCounter = defineStore({
  id: 'counter-store',
  state: () => {
    return {
      counter: 0,
    }
  },
  actions: {
    count() {
      this.counter += 1
    },
  },
})
