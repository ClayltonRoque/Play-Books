<template>
  <nav
    class="play-book-navbar navbar is-fixed-top has-shadow is-base-post"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand is-align-items-center">
        <Nuxt-link to="/" class="navbar-item logo-item">
          <img src="@/assets/play-books-logo.png" />
        </Nuxt-link>
        <Nuxt-link to="/" class="navbar-item logo-book">
          <img src="@/assets/book-logo.png" />
        </Nuxt-link>
        <div class="content-search">
          <Search />
        </div>
      </div>

      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <Nuxt-link to="/" class="navbar-item">Home </Nuxt-link>

          <Nuxt-link to="/favorites" class="navbar-item"
            >Favoritos<span class="favorites-notification">{{
              favoriteBooks.length
            }}</span></Nuxt-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useBookData } from '~/service/bookData'
import Search from '../components/Search.vue'

export default defineComponent({
  name: 'PlayBookNavBar',
  components: { Search },
  setup() {
    const { favoriteBooks } = useBookData()

    return {
      favoriteBooks,
    }
  },
})
</script>

<style lang="scss">
.play-book-navbar {
  position: initial;
  display: flex;
  align-items: center;
  height: 70px;

  .navbar-brand {
    top: 0px;
    flex: 1;
    img {
      max-height: 2.5rem;
    }
    .content-search {
      display: flex;
      flex: 1;
      justify-content: center;
    }

    .logo-book {
      display: none;
    }
  }
  .navbar-menu {
    flex-grow: 0;
    background: $base-post;
    .navbar-item {
      font-size: 1.25rem;
      color: #f0f5fa;
    }
    a.navbar-item:hover {
      background-color: #0a141e;
    }
  }

  .navbar-menu .navbar-start {
    overflow: hidden;
  }

  .favorites-notification {
    background: red;
    color: white;
    font-size: 0.7rem;
    width: fit-content;
    border-radius: 0.8rem;
    padding: 0.1rem 0.4rem;
    position: absolute;
    top: -0.001rem;
    right: 0.3rem;
  }

  @media (max-width: 1024px) {
    .container {
      display: flex;
      .logo-item {
        display: none;
      }
      .logo-book {
        display: block;
        margin-left: 1rem;
      }
      .navbar-start {
        display: flex;
      }
    }
  }
}
</style>
