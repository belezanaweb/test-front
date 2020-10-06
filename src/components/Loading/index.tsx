import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { ILoadingValues } from '../../redux/ducks/loading'
import { LoadindStyled } from './styles'

const Loading: React.FC = () => {
  const loading = useSelector<RootState, ILoadingValues>((state) => {
    return state.loadingReducer
  })

  return (
    <LoadindStyled show={loading.display}>
      <img src="./logo.svg" className="loading-logo" alt="logo" />
    </LoadindStyled>
  )
}

export default Loading
