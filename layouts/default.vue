<template>
  <div>
    <FbNavbar />
    <Nuxt />
    <b-loading
      :is-full-page="true"
      :can-cancel="false"
      :active="isLoading"
    ></b-loading>
  </div>
</template>

<script setup lang="ts">
import { computed, useNuxtApp } from '#app'

const { $store } = useNuxtApp()

const store = $store

const isLoading = computed(() => store.state.siteData.isLoadingActive)
</script>

<style lang="scss"></style>
