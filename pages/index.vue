<template>
  <section class="container" style="top: 86px">
    <div class="columns is-multiline align-items-full py-5">
      <playBookCard v-for="(book, index) in booksList" :key="index" :book="book"/>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { Volume } from "~/interfaces/bookProps";
import playBookCard from "../components/BookCard.vue";
import { useBookData } from "../service/bookData";
export default defineComponent({
  name: "playBookSearch",
  components: { playBookCard },
  setup() {
    const { state } = useBookData();
    const booksList = [
      {
        id: "iTaKEAAAQBAJ",
        searchInfo: {
          textSnippet: "O TypeScript conquistou o universo JavaScript."
        },
        volumeInfo: {
          imageLinks: {
            smallThumbnail: "http://books.google.com/books/content?id=iTaKEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            thumbnail: "http://books.google.com/books/content?id=iTaKEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          previewLink:"http://books.google.com.br/books?id=iTaKEAAAQBAJ&printsec=frontcover&dq=typescript&hl=&cd=1&source=gbs_api",
          title:"Aprendendo TypeScript",
          authors: "Josh Goldberg",
          publisher: "Novatec Editora",
          categories: ["Computers"],
          language: "pt-BR",
          publishedDate: "2022-09-19",
          pageCount: 29,
          description: "O TypeScript conquistou o universo JavaScript. Identificado em pesquisas com desenvolvedores como uma das linguagens de crescimento mais rápido e mais populares do mundo, o TypeScript é amplamente usado em empresas voltadas para o consumidor, assim como para outros tipos de negócios em todo o planeta e é frequentemente considerado responsável por ajudar no desenvolvimento de aplicações web em larga escala. No entanto, na verdade, o que é TypeScript? Como e por que ele funciona e como podemos usá-lo?Este livro prático levará programadores JavaScript iniciantes e avançados do nível de desconhecimento dos “tipos” ou “sistemas de tipos” ao domínio total dos aspectos básicos do TypeScript.Você aprenderá:• Os benefícios do TypeScript e as características gerais de seu sistema de tipos baseado no JavaScript “vanilla” (puro).• Como fornecer ao sistema de tipos do TypeScript anotações de tipo somente no desenvolvimento.• Como o TypeScript analisa e entende códigos para ajudar a aumentar os padrões de desenvolvimento existentes.• Como o TypeScript o ajudará a trabalhar com arrays, classes, funções, objetos e outras estruturas internas importantes do JavaScript.• Como usar eficientemente a grande quantidade de opções de configuração do TypeScript para personalizar o compilador TypeScript de acordo com suas equipes e projetos.• Várias integrações com o IDE, como as refatorações automatizadas e as buscas inteligentes em código fornecidas pelo TypeScript para ajudá-lo a desenvolver rapidamente com menos bugs.",
        }
      },
      {
        id: "YemUDwAAQBAJ",
        searchInfo: {
          textSnippet: "In this book, you’ll: Start with the basics: Learn about TypeScript’s different types and type operators, including what they’re for and how they’re used Explore advanced topics: Understand TypeScript’s sophisticated type system, ..."
        },
        volumeInfo: {
          imageLinks: {
            smallThumbnail: "http://books.google.com/books/content?id=YemUDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            thumbnail: "http://books.google.com/books/content?id=YemUDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          previewLink:"http://books.google.com.br/books?id=YemUDwAAQBAJ&printsec=frontcover&dq=typescript&hl=&cd=3&source=gbs_api",
          title: "Programming TypeScript",
          authors: "Boris Cherny",
          publisher: "O'Reilly Media, Inc.",
          categories: ["Computers"],
          language: "en",
          publishedDate: "2019-04-25",
          pageCount: 324,
          description: "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system. If you’re a programmer with intermediate JavaScript experience, author Boris Cherny will teach you how to master the TypeScript language. You’ll understand how TypeScript can help you eliminate bugs in your code and enable you to scale your code across more engineers than you could before. In this book, you’ll: Start with the basics: Learn about TypeScript’s different types and type operators, including what they’re for and how they’re used Explore advanced topics: Understand TypeScript’s sophisticated type system, including how to safely handle errors and build asynchronous programs Dive in hands-on: Use TypeScript with your favorite frontend and backend frameworks, migrate your existing JavaScript project to TypeScript, and run your TypeScript application in production",
        }
      },
      {
        id: "UZB352QcfiMC",
        searchInfo: {
          textSnippet: "What you’ll learn Why you should care about TypeScript What it does and what it doesn&#39;t do The current toolset and levels of support The new syntax features of TypeScript How to build your own TypeScript declaration files How to ..."
        },
        volumeInfo: {
          imageLinks: {
            smallThumbnail: "http://books.google.com/books/content?id=UZB352QcfiMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            thumbnail: "http://books.google.com/books/content?id=UZB352QcfiMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          previewLink:"http://books.google.com.br/books?id=UZB352QcfiMC&printsec=frontcover&dq=typescript&hl=&cd=18&source=gbs_api",
          title: "TypeScript Revealed",
          authors: "Dan Maharry",
          publisher: "Apress",
          categories: ["Computers"],
          language: "en",
          publishedDate: "2013-01-28",
          pageCount: 95,
          description: "TypeScript Revealed is a quick 100-page guide to Anders Hejlsberg's new take on JavaScript. With this brief, fast-paced introduction to TypeScript, .NET, Web and Windows 8 application developers who are already familiar with JavaScript will easily get up to speed with TypeScript and decide whether or not to start incorporating it into their own development. TypeScript is ‘JavaScript for Application-scale development’; a superset of JavaScript that brings to it an additional object-oriented-like syntax familiar to .NET programmers that compiles down into simple, clean JavaScript that any browser can run today. It’s also tied to the next version of the JavaScript standard, which means that TypeScript will continue to evolve over time to keep in step with that standard and with the capabilities of the engines that will execute JavaScript applications. If you are a .NET developer, Web designer or developer, or a programmer with a keen interest in scalable applications, TypeScript Revealed is a great way to get started with the language, learn how it compiles into JavaScript, and how easy it is to learn from a .NET/Java developer's perspective. Takes you through the language features in Typescript additional to those in JavaScript Describes the tooling and community support for TypeScript development Discusses how TypeScript can be included in ASP.NET, Windows 8, and node.js application development projects. What you’ll learn Why you should care about TypeScript What it does and what it doesn't do The current toolset and levels of support The new syntax features of TypeScript How to build your own TypeScript declaration files How to incorporate TypeScript into your projects Who this book is for TypeScript Revealed is aimed at the early adopter developer who is already familiar with Microsoft tools and .NET and/or JavaScript development that wants a flavor of TypeScript distilled, culled, and organized in one place. Table of ContentsChapter 1: What is TypeScript? Why TypeScript? Chapter 2: New Syntax Static Typing & Type Inference Tooling Interfaces Classes Derived classes using the 'extends' keyword. Arrow functions Modules Enforcing the Intention of some features. Typescript vs EcmaScript6 Chapter 3: Working with TypeScript Tools & Resources",
        }
      }
    ] as Volume[];
    return {
      state,
      booksList
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
