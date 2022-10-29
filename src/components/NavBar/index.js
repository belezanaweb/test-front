import React from 'react'

const NavBar = ({ actualStep }) => {
  const steps = ['sacola', 'pagamento', 'confirmação']

  return (
    <div>
      {steps.map((step) => (
        <p key={step}>{step}</p>
      ))}
    </div>
  )
}

export default NavBar
