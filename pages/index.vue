<template>
  <section class="play-books-home container">
    <div>hello world</div>
    <!-- <FbListOfBooks v-if="totalBooks" />
    <div v-else>
      <FbNoPageContent
        title="Você ainda não pesquisou livros"
        notfound="false"
      />
    </div> -->
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.play-books-home {
  top: 86px;
  .play-book-card {
    display: flex;
    cursor: pointer;
  }
}
</style>
