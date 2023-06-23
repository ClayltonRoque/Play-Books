export function useVolume(volume: BookDocument.Volume | null) {
  const imageThumbnail = computed(
    () =>
      volume?.volumeInfo?.imageLinks?.thumbnail &&
      volume?.volumeInfo?.imageLinks?.smallThumbnail
  )

  return {
    imageThumbnail,
  }
}
