/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'

import Lottie from 'react-lottie'

export const LottieComponent = ({ animationData }: any) => {
  return (
    // @ts-ignore
    <Lottie
      height={300}
      width={300}
      options={{
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
    />
  )
}
