<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="../assets/play-books-logo.png" width="112" height="28" />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <input
          class="input is-primary navbar-item"
          type="text"
          placeholder="Primary input"
        />
      </div>

      <div class="navbar-end">
        <a class="navbar-item"> Home </a>

        <a class="navbar-item"> Documentation </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Navbar",
});
</script>

<style lang="scss" scoped></style>
