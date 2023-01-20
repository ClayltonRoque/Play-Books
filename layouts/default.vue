<template>
  <div>
    <PlayBookNavBar />
    <Nuxt />
    <b-loading
      :is-full-page="true"
      :can-cancel="false"
      :active="isLoading"
    ></b-loading>
  </div>
</template>

<script lang="ts">
import { defineComponent, useStore, computed } from '@nuxtjs/composition-api'
import PlayBookNavBar from '~/components/Navbar.vue'

import { StateProps as SiteProps } from '@/store/siteData'

type StoreProps = {
  siteData: SiteProps
}

export default defineComponent({
  components: {
    PlayBookNavBar,
  },
  setup() {
    const store = useStore<StoreProps>()

    const isLoading = computed(() => store.state.siteData.isLoadingActive)

    return {
      isLoading,
    }
  },
})
</script>

<style lang="scss"></style>
