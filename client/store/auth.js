// state
export const state = () => ({
    user: null,
    token: null
})

// getters
export const getters = {
    user: state => state.user || {},
    token: state => state.token,
    check: state => state.user ? Object.keys(state.user).length > 0 : false,
    isVerified: state => (state.user || {}).status > 0
}

// mutations
export const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
    },

    FETCH_USER_SUCCESS(state, user) {
        state.user = user
    },

    FETCH_USER_FAILURE(state) {
        state.token = null
    },

    LOGOUT(state) {
        state.user = null
        state.token = null
    },
}

// actions
export const actions = {
    saveToken({ commit }, { token }) {
        return new Promise((resolve) => {
            commit('SET_TOKEN', token)
            resolve(true)
        })
    },

    login({ commit }, formData) {
        return new Promise((resolve, reject) => {
            this.$axios
                .post("/login", formData)
                .then((response) => {
                    commit('SET_TOKEN', response.data.access_token)
                    resolve(true)
                })
                .catch((error) => {
                    reject(error)
                });
        })
    },

    async fetchUser({ commit }) {
        await this.$axios.get('/auth-user')
            .then(async (userResponse) => {

                commit('FETCH_USER_SUCCESS', userResponse.data)
            })
            .catch(error => {
                commit('FETCH_USER_FAILURE')
            })
    },

    logout({ commit }) {
        return new Promise((resolve, reject) => {

            this.$axios.post('/logout')
                .then(() => {
                    commit('LOGOUT')
                    resolve(true)
                })
                .catch(logoutError => {
                    reject(logoutError)
                })
        })
    }
}
