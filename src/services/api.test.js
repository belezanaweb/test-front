// React components
import React from 'react'

// My component
import api from './api'

describe('testing API connection', () => {
  it('tests if the api returns status 200', async () => {
    await api.then(response => {
      expect(response.status).toEqual(200)
    })
  })

  it('tests if the api returns a valid data', async () => {
    await api.then(response => {
      expect(response.data.id).toEqual('5b15c171e4b0023bb624f616')
    })
  })
})
