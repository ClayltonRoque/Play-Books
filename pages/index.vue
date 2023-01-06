<template>
  <header class="headerContainer has-background-base-post red">
    <nav
      class="navbar navbarContainer has-background-base-post"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="../assets/play-books-logo.png" class="logo" />
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
          <a class="navbar-item"> Home </a>

          <a class="navbar-item"> Documentation </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> More </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"> About </a>
              <a class="navbar-item"> Jobs </a>
              <a class="navbar-item"> Contact </a>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light"> Log in </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import HelloWord from "../components/HelloWord.vue";

export default defineComponent({
  name: "Home",
  components: {},
});
</script>

<style lang="scss" scoped>
.headerContainer {
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  height: 80px;
  align-content: center;

  .navbarContainer {
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    border: 0;
    .logo {
      height: 400px;
    }
  }
}

.red {
  background-color: red;
}
</style>
