// import React from 'react';
import path from 'path'
import express from 'express'
import cors from 'cors'
import manifestHelpers from 'express-manifest-helpers'
import bodyParser from 'body-parser'
import paths from '../../scripts/config/paths'
// import { configureStore } from '../shared/store';
import errorHandler from './middleware/error-handler'
import serverRenderer from './middleware/server-renderer'
import addStore from './middleware/add-store'

require('dotenv').config()

const app = express()
// const app = express.default();

// Use Nginx or Apache to serve static assets in production or remove the if() around the following
// lines to use the express.static middleware to serve assets for production (not recommended!)
// if (process.env.NODE_ENV === 'development') {
app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)))
// }

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(addStore)

const manifestPath = path.join(paths.clientBuild, paths.publicPath)

app.use(
  manifestHelpers({
    manifestPath: `${manifestPath}/manifest.json`
  })
)

app.use(serverRenderer())

app.use(errorHandler)

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `[${new Date().toISOString()}]`,
    `App is running: http://localhost:${process.env.PORT || 3000}`
  )
})

export default app
