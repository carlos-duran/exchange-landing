<template>
  <section class="py-12">
    <div class="container px-4 text-center">
      <h2 class="text-3xl mb-4 text-orange uppercase font-light">They talk about us</h2>
      <div class="-mx-4">
        <div class="flex flex-wrap justify-center">
          <div
            v-for="(brand, i) in brands"
            :key="i"
            class="px-4">
            <img
              :src="brand.img"
              :alt="brand.name"
              class="w-24 md:w-48">
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
      brands: [
        { img: '/images/logo-forbes.png', alt: 'Forbes' },
        { img: '/images/logo-fortune.png', alt: 'Fortune' },
        { img: '/images/logo-bloomberg.png', alt: 'Bloomberg' }
      ]
    }
  }
}
</script>
