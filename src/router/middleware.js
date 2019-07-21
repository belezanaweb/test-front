export default ({ router, store }) => {
  router.beforeEach((to, from, next) => {
    
    const fromConfirmationRoute = from.name === 'confirmation'
    const isPaymentRoute = to.matched.some(record => record.name === 'payment')

    if (store.state.paymentFormIsValid && fromConfirmationRoute && isPaymentRoute) {
      next({
        path: '/',
      })
    } else if (to.matched.some(record => record.meta.paymentIsValid)) {
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
