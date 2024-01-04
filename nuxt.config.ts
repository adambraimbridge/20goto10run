// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
        htmlAttrs: {
            lang: 'en',
        },
        title: '20 GOTO 10',
        meta: [
            { name: 'description', content: 'A blog about programming, software development, and other things.' },
            { name: 'keywords', content: 'programming, software development, blog, javascript, typescript, react, vue, svelte, node, deno, python, rust, go, ruby, rails, django, flask, graphql, sql, postgresql, mysql, mongodb, redis, docker, kubernetes, aws, gcp, azure, linux, macos, windows' },
            { name: 'author', content: 'adam@braimbridge.com' },
            { name: 'theme-color', content: '#000' },
            { name: 'application-name', content: '20 GOTO 10' },
        ],
        link: [],
    }
  },
});

