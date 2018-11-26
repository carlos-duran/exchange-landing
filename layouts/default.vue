<template>
  <div class="font-sans text-black text-lg">
    <nuxt/>
  </div>
</template>

<script>
export default {
  watch: {
    '$auth.user': {
      immediate: true,
      handler(v) {
        if (v) this.$router.replace('/')
        else this.$router.replace('/login')
      }
    }
  }
}
</script>
