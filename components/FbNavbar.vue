<template>
  <nav
    class="play-book-navbar navbar is-fixed-top has-shadow is-base-post"
    role="navigation"
    aria-label="main navigation"
  >
    <div
      class="backdrop"
      :class="{ 'is-active': state.isHamburgerActive }"
      @click="state.isHamburgerActive = !state.isHamburgerActive"
    ></div>
    <div class="container">
      <div class="navbar-brand is-align-items-center">
        <Nuxt-link to="/" class="navbar-item logo-item">
          <img src="@/assets/play-books-logo.png" />
        </Nuxt-link>
        <Nuxt-link to="/" class="navbar-item logo-book">
          <img src="@/assets/book-logo.png" />
        </Nuxt-link>
        <div class="content-search">
          <FbSearch />
        </div>
        <a
          class="navbar-burger"
          :class="{ 'is-active': state.isHamburgerActive }"
          @click="state.isHamburgerActive = !state.isHamburgerActive"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        :class="{ 'is-active': state.isHamburgerActive }"
        class="navbar-menu"
      >
        <div class="navbar-start">
          <Nuxt-link to="/" class="navbar-item">Home </Nuxt-link>

          <Nuxt-link to="/favorites" class="navbar-item"
            >Favoritos<span class="favorites-notification">{{
              favoriteBooks.length
            }}</span></Nuxt-link
          >

          <a class="navbar-item" @click="state.isModalActive = true">Menu</a>

          <div :class="{ 'is-active': state.isModalActive }" class="modal">
            <div
              class="modal-background"
              @click="state.isModalActive = false"
            ></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Menu</p>
                <button
                  class="delete"
                  aria-label="close"
                  @click="state.isModalActive = false"
                ></button>
              </header>
              <section class="modal-card-body">
                <label class="label">Modelo de Paginação</label>
                <div class="select">
                  <select v-model="state.personalizeSite.typePagination">
                    <option selected>Paginação Simples</option>
                    <option>Rolagem Infinita</option>
                  </select>
                </div>
                <label class="label">Filtragem de Pesquisa</label>
                <div class="select">
                  <select v-model="state.personalizeSite.typeSearch">
                    <option selected>Titulo</option>
                    <option>Autor</option>
                    <option>ISBN</option>
                  </select>
                </div>
              </section>
              <footer class="modal-card-foot">
                <button
                  class="button is-success"
                  @click="
                    personalizeSite(state.personalizeSite),
                      (state.isModalActive = false)
                  "
                >
                  Salvar
                </button>
                <button class="button" @click="state.isModalActive = false">
                  Cancelar
                </button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { reactive } from '#app'
import { useBookData } from '~/service/bookData'

import { StateProps as StateBook } from '~/store/bookData'

export interface StateProps {
  bookData: StateBook
}

const { favoriteBooks, personalizeSite } = useBookData()

const state = reactive({
  isModalActive: false,
  isHamburgerActive: false,
  personalizeSite: {
    typeSearch: 'Titulo',
    typePagination: 'Paginação Simples',
  },
})
</script>

<style lang="scss">
.play-book-navbar {
  position: initial;
  display: flex;
  align-items: center;
  height: 70px;
  .backdrop {
    @include touch {
      opacity: 0;
      transition: opacity 0.5s;
      &.is-active {
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: 200;
        background: #000;
        opacity: 0.5;
      }
    }
  }

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

  .navbar-menu {
    @include touch {
      display: block;
      -webkit-overflow-scrolling: touch;
      max-height: none !important;
      overflow: auto;
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      z-index: 201;
      transition: all 0.5s;
      transform: translateX(-100%);
      &.is-active {
        transform: translateX(0);
        width: 70vw;
      }
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

  @include tablet {
    .container {
      display: flex;

      .navbar-start {
        display: flex;
      }
      .navbar-menu.is-active {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
    }
  }
  @include mobile {
    .container {
      display: flex;
      .logo-item {
        display: none;
      }
      .logo-book {
        display: block;
        margin-left: 1rem;
      }
    }
  }
}
</style>
