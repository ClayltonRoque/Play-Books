<template>
  <div></div>
</template>
<script setup lang="ts">
import { onMounted, useLazyFetch } from '#app'
import { useGoogleBooksAPI } from '@/service/useGoogleBooksAPI'

const { fetchBooks } = useGoogleBooksAPI()
const query = 're zero'
const maxResults = 20
const startIndex = 0

// onMounted(() => {
//   const response = fetchBooks(query, maxResults, startIndex)
//   console.log(response)
// })

const response = fetchBooks(query, maxResults, startIndex)

console.log(response)
</script>
<style lang="scss"></style>
