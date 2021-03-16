export default async ({ app, store }) => {
    const token = store.getters['auth/token']

    if (token) {
        app.$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete app.$axios.defaults.headers.common['Authorization']
    }

    if (!store.getters['auth/check'] && token) {
        await store.dispatch('auth/fetchUser')
    }
}
