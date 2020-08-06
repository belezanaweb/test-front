import React from 'react'
function Skeleton(props) {
  return (
    <div>
      <svg  viewBox="0 0 636 153" fill="none" {...props}>
        <path
          transform="rotate(-90 0 40.765)"
          fill="url(#prefix__paint0_linear)"
          d="M0 40.765h40.765v635.559H0z"
        />
        <path
          transform="rotate(-90 0 96.883)"
          fill="url(#prefix__paint1_linear)"
          d="M0 96.883h40.765v635.559H0z"
        />
        <path
          transform="rotate(-90 0 152.765)"
          fill="url(#prefix__paint2_linear)"
          d="M0 152.765h40.765v635.559H0z"
        />
        <defs>
          <linearGradient
            id="prefix__paint0_linear"
            x1={20.382}
            y1={40.765}
            x2={20.382}
            y2={676.323}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset={0.516} stopColor="#C4C4C4" stopOpacity={0.01} />
            <stop offset={0.984} stopColor="#C4C4C4" stopOpacity={0.44} />
          </linearGradient>
          <linearGradient
            id="prefix__paint1_linear"
            x1={20.382}
            y1={96.883}
            x2={20.382}
            y2={732.442}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset={0.516} stopColor="#C4C4C4" stopOpacity={0.01} />
            <stop offset={0.984} stopColor="#C4C4C4" stopOpacity={0.44} />
          </linearGradient>
          <linearGradient
            id="prefix__paint2_linear"
            x1={20.382}
            y1={152.765}
            x2={20.382}
            y2={788.323}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset={0.516} stopColor="#C4C4C4" stopOpacity={0.01} />
            <stop offset={0.984} stopColor="#C4C4C4" stopOpacity={0.44} />
          </linearGradient>
        </defs>
      </svg>

    </div>
  )
}

export default Skeleton

