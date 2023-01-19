<template>
  <section class="play-books-details container py-5 ">
    <div class="books-details-container px-5">
      <DetailsCard />
      <div class="details-content">
        <p class="title is-size-5 has-text-base-title pb-2">
          Aprendendo TypeScript é um recurso acessível e excelente.
        </p>
        <p class="subtitle has-text-base-subtitle">
          O TypeScript conquistou o universo JavaScript. Identificado em pesquisas com desenvolvedores como uma das linguagens de crescimento mais rápido e mais populares do mundo, o TypeScript é amplamente usado em empresas voltadas para o consumidor, assim como para outros tipos de negócios em todo o planeta e é frequentemente considerado responsável por ajudar no desenvolvimento de aplicações web em larga escala. No entanto, na verdade, o que é TypeScript? Como e por que ele funciona e como podemos usá-lo? Este livro prático levará programadores JavaScript iniciantes e avançados do nível de desconhecimento dos "tipos" ou "sistemas de tipos" ao domínio total dos aspectos básicos do TypeScript. Você aprenderá: • Os benefícios do TypeScript e as características gerais de seu sistema de tipos baseado no JavaScript "vanilla" (puro). • Como fornecer ao sistema de tipos do TypeScript anotações de tipo somente no desenvolvimento. • Como o TypeScript analisa e entende códigos para ajudar a aumentar os padrões de desenvolvimento existentes. • Como o TypeScript o ajudará a trabalhar com arrays, classes, funções, objetos e outras estruturas internas importantes do JavaScript. • Como usar eficientemente a grande quantidade de opções de configuração do TypeScript para personalizar o compilador TypeScript de acordo com suas equipes e projetos. • Várias integrações com o IDE, como as refatorações automatizadas e as buscas inteligentes em código fornecidas pelo TypeScript para ajudá-lo a desenvolver rapidamente com menos bugs. "Aprendendo TypeScript é um recurso acessível e excelente. Josh introduz as partes essenciais do TypeScript sem se perder em detalhes desnecessários." —Ryan Cavanaugh Gerente Consultor de Engenharia de Software, Microsoft; Líder de Desenvolvimento, TypeScript "O domínio de Josh é evidente no decorrer das páginas de Aprendendo TypeScript. Além de o conteúdo ser profundamente educativo, ele também é divertido e empolgante." —Cassidy Williams Engenheiro de Experiência do Desenvolvedor, Consultor de Startup e Investidor
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import DetailsCard from '../../components/DetailsCard.vue';

export default defineComponent({
  name: 'PlayBookDetails',
  components: { DetailsCard },
  setup() {
    return {
    }
  },
})
</script>

<style lang="scss">
.play-books-details {
  top: 86px;
  margin-bottom: 8rem;

  .books-details-container {
    max-width: 52rem;
    width: 100%;
    margin: 0 auto;
    border: 0;

    .details-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2.5rem 2rem;

      p {
        line-height: 160% !important;
      }
    }
  }
}
</style>
