<template>
  <nav
    class="play-book-navbar navbar is-fixed-top has-shadow is-base-post"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand is-align-items-center">
        <Nuxt-link to="/" class="navbar-item">
          <img
            src="https://s3-alpha-sig.figma.com/img/0a58/5928/1d7436d96ee3fa71a00f8daf990b5ee3?Expires=1674432000&Signature=AuKiJDKAURHKh-a3YZaf3Lq094Gj5Jc-F7WshiIW5io-QYNiAkQDlk70fbtWTHg8KQcevb~m1XRIs8w5U3eRi-dTB0GAvdkLpcwGzEpN3AKmchOHmSCnZlKrMwR3xcQt-cN870J6Nn0qbgkXrFv1O0bYu750fsYi9Tf~3x6HVw1Hi~vmBuroEnW8pyYvEYkbZlqsjNp2mvOqdkRt~uMsI27rLaBjn6zZ3ldxYQ8gSZDoLz2hxuKuP1uZk2Dp4zk1IQxtM2Q0r6NTdciqk125ClVt-sIOc5e9NfXUnH3Vk~HtfYKD~PHiqOEtJrErnqAr-Yltc0yCogGAnenAfsNRWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
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
  name: 'playBookNavBar',
  components: { Search },
  setup() {},
})
</script>

<style lang="scss">
.play-book-navbar {
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
