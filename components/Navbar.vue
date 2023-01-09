<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand" style="flex: 1">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <div
          class="control"
          style="display: flex; width: 100%; justify-content: center"
        >
          <input
            class="input my-4 is-medium"
            type="text"
            placeholder="Pesquisar livros"
            style="max-width: 75%; margin: 0 auto"
          />
        </div>

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

      <div id="navbarBasicExample" class="navbar-menu" style="flex-grow: 0">
        <div class="navbar-end">
          <Nuxt-link to="/" class="navbar-item"> Home </Nuxt-link>

          <Nuxt-link to="/favorites" class="navbar-item"> Favoritos </Nuxt-link>
        </div>
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
