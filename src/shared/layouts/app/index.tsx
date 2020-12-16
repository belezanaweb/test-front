import React from 'react'

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }: Props) => (
  <div>
    <div>{children}</div>
  </div>
)

export default AppLayout
