export default ({ router, store }) => {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.paymentIsValid)) {
      if (!store.state.paymentFormIsValid) {
        next({
          path: from.path,
        })
      } else {
        next()
      }
    } else {
      next() 
    }
  })
}
