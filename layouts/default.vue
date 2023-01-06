<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Navbar from "../components/Navbar.vue";

export default defineComponent({
  name: "Home",
  components: {
    Navbar,
  },
});
</script>
