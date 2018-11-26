<template>
  <div class="bg-black min-h-screen flex items-center">
    <div class="w-full max-w-sm mx-auto px-4 py-12">

      <div class="bg-white text-primary shadow-lg">
        <div class="px-4 sm:px-6 lg:px-10 py-4">
          <h1 class="text-center font-light text-primary my-3">Welcome!</h1>
          
          <form @submit.prevent="login">
            <label class="block mb-6">
              <input 
                v-model="auth.nickname" 
                placeholder="Nickname" 
                name="nickname" 
                class="border-b focus:border-primary p-3 w-full" 
                required>
            </label>

            <label class="block mb-6">
              <input 
                v-model="auth.password" 
                type="password" 
                placeholder="Password" 
                class="border-b focus:border-primary p-3 w-full" 
                required>
            </label>

            <div class="text-center">
              <button 
                type="submit" 
                class="transition w-full bg-primary hover:bg-primary-dark text-white font-medium px-12 py-3 cursor-pointer uppercase rounded">
                <span v-if="!authenticating">Login</span>
                <i 
                  v-else 
                  class="mdi mdi-loading mdi-spin"/>
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  middleware: 'no-auth',
  head: {
    title: 'Login'
  },
  data() {
    return {
      authenticating: false,
      auth: {
        nickname: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      if (this.authenticating) return
      this.authenticating = true
      try {
        await this.$auth.loginWith('local', { data: this.auth })
      } catch (e) {
        window.alert('Auth failed')
      } finally {
        this.authenticating = false
      }
    }
  }
}
</script>
