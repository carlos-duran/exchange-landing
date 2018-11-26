<template>
  <section class="py-12 bg-black">
    <div class="container px-4 text-center">
      <div class="-mx-4">
        <div class="flex flex-wrap justify-center">
          <div class="px-4">
            <!-- ... -->
          </div>
        </div>
      </div>

      <div class="text-right">
        <button
          class="p-3 text-white bg-red rounded hover:bg-red-dark"
          @click="$auth.logout()">
          Logout
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      social: []
    }
  }
}
</script>
