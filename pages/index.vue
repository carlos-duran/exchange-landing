<template>
  <div>
    <SectionHeader/>
    <SectionConverter/>
    <SectionTalk/>
    <SectionFooter/>
  </div>

</template>

<script>
import SectionHeader from '~/components/home/SectionHeader'
import SectionConverter from '~/components/home/SectionConverter'
import SectionTalk from '~/components/home/SectionTalk'
import SectionFooter from '~/components/home/SectionFooter'

export default {
  middleware: 'auth',
  components: {
    SectionHeader,
    SectionConverter,
    SectionTalk,
    SectionFooter
  },
  async fetch({ store }) {
    await store.dispatch('rates/load', { from: 'USD', to: 'EUR' })
  }
}
</script>
