<template>
  <nav
    class="play-book-navbar navbar is-fixed-top has-shadow is-base-post"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand is-align-items-center">
        <Nuxt-link to="/" class="navbar-item">
          <img src="../assets/play-books-logo.png" />
        </Nuxt-link>
        <div class="content-search">
          <Search />
        </div>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <Nuxt-link to="/" class="navbar-item">Home</Nuxt-link>

          <Nuxt-link to="/favorites" class="navbar-item">Favoritos</Nuxt-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-dropdown">
              <Nuxt-link to="/" class="navbar-item">Home</Nuxt-link>
              <Nuxt-link to="/favorites" class="navbar-item">
                Favoritos
              </Nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Search from '../components/Search.vue'

export default defineComponent({
  name: 'PlayBookNavBar',
  components: { Search },
  setup() {},
})
</script>

<style lang="scss">
.play-book-navbar {
  position: initial;
  display: flex;
  align-items: center;
  height: 70px;
  .navbar-brand {
    flex: 1;
    img {
      max-height: 2.5rem;
    }
    .content-search {
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }
  .navbar-menu {
    flex-grow: 0;
  }
}
</style>
