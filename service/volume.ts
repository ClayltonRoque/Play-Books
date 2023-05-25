import { computed } from '#app'

export function useVolume(volume: BookDocument.Volume) {
  const imageThumbnail = computed(
    () =>
      volume.volumeInfo?.imageLinks?.thumbnail &&
      volume.volumeInfo?.imageLinks?.smallThumbnail
  )

  return {
    imageThumbnail,
  }
}
