import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
    createPersistedState({
        key: 'Nuxt Laravel',
        paths: ['auth.token'],
        storage: {
            getItem: key => window.localStorage.getItem(key),
            setItem: (key, state) => window.localStorage.setItem(key, state, {
                expires: 1,
                secure: false
            }),
            removeItem: key => window.localStorage.removeItem(key)
        }
    })(store)
}