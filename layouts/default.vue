<template>
  <div>
    <FbNavbar />
    <div class="page-container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.page-container {
  margin-top: $navbar-height;
}
</style>
