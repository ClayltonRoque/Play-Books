import { computed } from '@nuxtjs/composition-api'

export function useVolume(volume: BookDocument.Volume) {
  const imageThumbnail = computed(() =>
          volume.volumeInfo?.imageLinks?.thumbnail &&
          volume.volumeInfo?.imageLinks?.smallThumbnail
      )

    return {
        imageThumbnail
    }
}
