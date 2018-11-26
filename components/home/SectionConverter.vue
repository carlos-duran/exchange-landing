<template>
  <section class="py-12 bg-primary text-white">
    <div class="container px-4 text-center">
      <h2 class="text-4xl mb-6 uppercase font-light">Convert!</h2>
      
      <div class="-mx-4 mb-3">
        <div class="flex flex-wrap justify-center">
          <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-3">
            <label class="block border-2 border-green-dark rounded-lg overflow-hidden">
              <span class="block p-2 bg-green border-b-2 border-green-dark">USD</span>
              <!-- <input
                :value="from"
                class="p-3 w-full text-center"
                @keyup="checkBase"> -->
              <Money
                v-model="from"
                v-bind="formats.usd"
                class="p-3 w-full text-center"
                @keyup.native.enter="convert"/>
            </label>
          </div>
          <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-3">
            <label class="block border-2 border-green-dark rounded-lg overflow-hidden">
              <span class="block p-2 bg-green border-b-2 border-green-dark">EUR</span>
              <!-- <input
                v-model="to"                  
                class="p-3 w-full bg-grey-lighter text-center"
                disabled> -->
              <Money
                :value="to"
                v-bind="formats.eur"
                class="p-3 w-full bg-grey-lighter text-center font-bold"
                disabled/>
            </label>
          </div>
        </div>
      </div>

      <div class="text-center text-xl">
        <button
          class="py-4 px-8 text-white bg-red-light border-b-2 border-red-dark hover:bg-red rounded"
          @click="convert">
          CALCULATE
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Money } from 'v-money'

export default {
  components: { Money },
  data() {
    return {
      from: '',
      to: '',
      loop: null,
      formats: {
        usd: {
          prefix: '$ ',
          precision: 4
        },
        eur: {
          prefix: '€ ',
          precision: 2
        }
      }
    }
  },
  computed: {
    ...mapState({
      rates: s => s.rates
    })
  },
  mounted() {
    this.loop = setInterval(this.load, 10 * 60 * 1000, {
      from: 'USD',
      to: 'EUR'
    })
  },
  beforeDestroy() {
    clearInterval(this.loop)
  },
  methods: {
    ...mapActions('rates', ['load']),

    async checkBase(e) {
      const { value } = e.target
      if (/^(\d{1,3},)*\d{0,3}(\.\d{0,4}){0,1}$/.test(value)) {
        this.from = value
      }
      e.target.value = this.from
    },
    convert() {
      const num = parseFloat(this.from) * this.rates['USD']['EUR']
      this.to = parseFloat(Math.round(num * 100) / 100).toFixed(2)
    }
  }
}
</script>
