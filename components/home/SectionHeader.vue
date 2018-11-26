<template>
  <section>
    <div class="h-4 bg-primary"/>
    <div class="container py-12 px-4 text-center">
      <img
        src="/images/logo.png"
        alt="logo"
        class="w-24 h-24 mb-2">
      <h1 class="text-2xl mb-6 font-sans font-light tracking-wide">
        Money<span class="text-teal">X</span>Change
      </h1>
      <div class="-mx-4">
        <div class="flex flex-wrap justify-center items-center">
          <div
            v-for="(link, i) in links"
            :key="i"
            class="w-1/2 md:w-48 px-4 mb-2">
            <nuxt-link
              :to="link.url"
              class="block w-full bg-orange hover:bg-orange-dark p-2 rounded text-white no-underline">
              {{ link.text }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: 'Home', url: '/' },
        { text: 'Product', url: '/' },
        { text: 'About', url: '/' },
        { text: 'Contact', url: '/' }
      ]
    }
  }
}
</script>
