<template>
  <div>
    <PlayBookNavBar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import PlayBookNavBar from '~/components/Navbar.vue'

export default defineComponent({
  components: {
    PlayBookNavBar
  }
})
</script>

<style lang="scss"></style>
