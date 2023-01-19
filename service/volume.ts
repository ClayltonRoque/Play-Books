import { computed } from '@nuxtjs/composition-api'

export function useVolume(volume: BookDocument.Volume) {
  const authors = computed(() => volume.volumeInfo?.authors)
  return {
    authors,
  }
}
