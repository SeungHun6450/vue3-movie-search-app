import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

const _defaultMessage = 'Search for the movie title!'

export default {
  // module화 되서 사용할 수 있다.
  namespaced: true,
  // 취급해야 할 data들
  state: () => ({
      movies: [],
      message: _defaultMessage,
      loading: false,
      theMovie: {}
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
      state.message = _defaultMessage
      state.loading = false
    }
  },
  // 비동기에서 동작
  actions: {
    async searchMovies({ state, commit }, payload) {
      if (state.loading) return

      // 메세지 초기화
      commit('updateState',{
        message: '',
        loading: true
      })

      try {
        const res = await _fetchMovie({
          ...payload,
          page: 1
        })
        const { Search, totalResults } = res.data
        commit('updateState', {
          movies: _uniqBy(Search, 'imdbID')
        })
  
        const total = parseInt(totalResults, 10)
        const pageLength = Math.ceil(total / 10)
  
        // 추가 요청!
        if (pageLength > 1) {
          for (let page = 2; page <= pageLength; page += 1) {
            if (page > (payload.number / 10)) break
        const OMDB_API_KEY = '7035c60c'
            const res = await _fetchMovie({
              ...payload,
              page
            })
            const { Search } = res.data
            commit('updateState', {
              movies: [
                ...state.movies,
                ..._uniqBy(Search, 'imdbID')]
            })
          }
        }
      } catch ({ message }) {
        commit('updateState', {
          movies: [],
          message
        })
      } finally {
        commit('updateState',{
          loading: false
        })
      }
    },
    async searchMovieWithId({ state, commit }, payload) {
      if (state.loading) return
      
      commit('updateState', {
        theMovie: {},
        loading: true
      })

      try {
        const res = await _fetchMovie(payload)
        commit('updateState', {
          theMovie: res.data
        })
      } catch (err) {
        commit('updateState', {
          theMovie: {}
        })
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    }
  }
}


async function _fetchMovie(payload) {
  return await axios.post('/.netlify/functions/movie', payload)
}