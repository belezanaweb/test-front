import React from 'react'
import MediaMatch from '../../components/MediaMatch'
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
      <MediaMatch greaterThan="medium">
        <ProfileMenu activeLink="/" />
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <ProfileMenu activeLink="/" />
      </MediaMatch>
    </div>
  )
}
