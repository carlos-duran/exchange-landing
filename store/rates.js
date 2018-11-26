export const state = () => ({})

export const mutations = {
  SET_RATES(state, { base, rates }) {
    state[base] = rates
  }
}

export const actions = {
  async load({ commit }, { from, to }) {
    const exchange = await this.$axios.$get('/exchange', {
      params: { from, to }
    })
    commit('SET_RATES', exchange)
  }
}
