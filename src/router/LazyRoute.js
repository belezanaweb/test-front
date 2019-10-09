import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import Loader from '../components/Loader/Loader'

function LazyRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => {
                return (
                    <Suspense fallback={<Loader />}>
                        <Component {...props} />
                    </Suspense>
                )
            }}
        />
    )
}

export default LazyRoute
