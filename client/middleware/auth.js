export default ({ app, store, redirect }) => {
	if (!store.getters['auth/check']) {
		return redirect('/dashboard')
	} else {
	}
}
