import { Suspense } from 'react'
import { createHOC } from '../helpers/createHOC'

export const withSuspense = createHOC(Suspense, 'Suspense')
