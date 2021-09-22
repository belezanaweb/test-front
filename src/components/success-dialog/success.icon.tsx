import React, { FC } from 'react'

export const SuccessIcon: FC<{ className?: string, primaryColor?: string }> = ({
  className,
  primaryColor = 'currentColor'
}) => (
  <svg
    fill={primaryColor}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
    xmlSpace="preserve"
  >
    <path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z" />
    <path d="m38.252 15.336-15.369 17.29-9.259-7.407a1 1 0 0 0-1.249 1.562l10 8a.999.999 0 0 0 1.373-.117l16-18a1 1 0 1 0-1.496-1.328z" />
  </svg>
)
