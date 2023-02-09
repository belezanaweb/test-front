import { CheckoutStep } from '../../features/Checkout/types'
import './style.scss'

type TabsProps = {
  children: JSX.Element[]
  selected: string
  disabled?: CheckoutStep[]
  onChange: (selected: CheckoutStep) => void
}

export function Tabs({ children, selected, disabled = [], onChange  }: TabsProps) {
  const sections = children
  return (
    <div className='tabs'>
      <nav className='tabs-bar'>
        { 
          children.map(section => 
            <button 
              className={section?.key === selected ? 'tab-button-selected' : 'tab-button'} 
              key={section?.key} 
              disabled={disabled.some(step => step === section?.key)}
              onClick={() => onChange(section?.key as CheckoutStep)}>
                {section?.key}
            </button>
          ) 
        }
      </nav>
      <main className='tab-content'>
        { sections.find(section => section.key === selected) }
      </main>
    </div>
  )
}