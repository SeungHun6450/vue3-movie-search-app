import axios from 'axios'

export default {
  // module화 되서 사용할 수 있다.
  namespaced: true,
  // 취급해야 할 data들
  state: () => ({
      movies: [],
      message: '',
      loading: false
  }),
  // computed, 계산된 상태를 만들기
  getters: {
  },
  // methods
  // 변이, 관리하는 data 수정 가능
  mutations: {
    updateState(state, payload) {
      // ['movies', 'message', 'loading']
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    resetMovies(state) {
      state.movies = []
    }
  },
  // 비동기에서 동작
  actions: {
    async searchMovies({ commit }, payload) {
      const { title, type, number, year } = payload
      const OMDB_API_KEY = '7035c60c'

      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      const { Search, totalResults } = res.data
      commit('updateState', {
        movies: Search
      })
    }
  }
}