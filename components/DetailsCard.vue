<template>
  <div class="play-books-details-card card is-desktop has-base-profile">
    <div class="card-content">
      <header class="card-header pb-2" style="justify-content: space-between">
        <a class="has-text-brand-blue button-details is-size-6">
          <ChevronLeft class="button-icon" />VOLTAR
        </a>
        <a
          class="has-text-brand-blue button-details is-size-6"
          href="https://books.google.com.br/books?id=QRIuEAAAQBAJ&printsec=frontcover&dq=java&hl=&cd=1&source=gbs_api#v=onepage&q=java&f=false" target="_blank"
        >
        PREVIEW <ArrowTopRight class="button-icon"/>
      </a>
      </header>
      <header class="card-header mb-4">
        <p class="title is-size-3 has-text-base-title card-header-title px-0">Java Guia do Programador - 4ª Edição</p>
      </header>
      <div class="media mt-5">
        <div class="media-left mr-5">
          <figure>
            <img src="http://books.google.com/books/content?id=iTaKEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
          </figure>
        </div>
        <div class="media-content" style="overflow: hidden">
          <div class="columns">
            <div class="column">
              <div class="content">
                <p class="title is-size-5 has-text-base-title pb-2">
                  Autor
                </p>
                <p class="subtitle has-text-base-subtitle">
                  Josh Goldberg
                </p>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <p class="title is-size-5 has-text-base-title pb-2">
                  Editora
                </p>
                <p class="subtitle has-text-base-subtitle">
                  Novatec Editora
                </p>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <p class="title is-size-5 has-text-base-title pb-2">
                  Categorias
                </p>
                <p class="subtitle has-text-base-subtitle">
                  Computers
                </p>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="content">
                <p class="title is-size-5 has-text-base-title pb-2">
                  Idioma
                </p>
                <p class="subtitle has-text-base-subtitle">
                  pt-BR
                </p>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <p class="title is-size-5 has-text-base-title pb-2">
                  Publicado em
                </p>
                <p class="subtitle has-text-base-subtitle">
                  2022
                </p>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <p class="title is-size-5 has-text-base-title pb-2">
                  Páginas
                </p>
                <p class="subtitle has-text-base-subtitle">
                  405
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button class="button is-align-content-center is-size-6"><HeartIcon class="button-icon mr-2"/> ADICIONAR</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import ArrowTopRight from 'vue-material-design-icons/ArrowTopRight.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import HeartIcon from 'vue-material-design-icons/Heart.vue';

export default defineComponent({
  name: 'PlayBookDetailsCard',
  components: {
    HeartIcon,
    ChevronLeft,
    ArrowTopRight
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss">
.play-books-details-card {
  border: 2px solid #112131;
  &:hover {
    border-color: #00acee;
  }

  .card-header-title {
    border-bottom: 2px solid #00acee;
  }

  .button-icon {
    display: flex;
    width: 18px;
    height: 18px;
    align-items: center;
  }

  .button-details {
    display: flex;
    align-items: center;
    border-bottom: 1px solid transparent;
    &:hover {
      border-color: #00acee;
    }
  };

  img {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    height: 200px;
    width: 100%;
    max-width: 150px;

    border: 1px solid #112131;
    &:hover {
      border-color: #00acee;
    }

    &:disabled {
      opacity: 0;
      transform: scale(0);
    }

    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }

    transition: all 0.2s;
  }
}
</style>
