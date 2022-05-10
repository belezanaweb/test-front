import React from 'react'
import ProfileMenu from '../../components/Menu'

export function Cart() {
  return (
    <div
      style={{
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <ProfileMenu activeLink="/" />
    </div>
  )
}
