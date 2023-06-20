<template>
  <div class="play-book-layout">
    <Navbar />
    <div class="page-container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.play-book-layout {
  .page-container {
    margin-top: $navbar-height;
  }
}
</style>
