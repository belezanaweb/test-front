import React from 'react'
import { registerObserver } from 'react-perf-devtool'
import whyDidYouRender from '@welldone-software/why-did-you-render'
import a11yChecker from 'a11y-checker'

// ally-checker
requestIdleCallback && requestIdleCallback(a11yChecker)

// assign the observer to the global scope, as the GC will delete it otherwise
window.observer = registerObserver()

// why-did-you-render
whyDidYouRender(React)
