<template>
  <HelloWord />
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import HelloWord from "../components/HelloWord.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    HelloWord,
  },
});
</script>
