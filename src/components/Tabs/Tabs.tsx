import { CheckoutStep } from '../../features/Checkout/types'
import './style.scss'

interface TabsProps {
  children: JSX.Element[]
  selected: string
  fixed?: boolean
  disabled?: CheckoutStep[]
  onChange: (selected: CheckoutStep) => void
}

export function Tabs({ children, selected, fixed = false, disabled = [], onChange  }: TabsProps) {
  const sections = children
  return (
    <div className='tabs'>
      <nav className={fixed ? 'tabs-bar-fixed' : 'tabs-bar'}>
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
      <main className={fixed ? 'tab-content-fixed' : 'tab-content'}>
        { sections.find(section => section.key === selected) }
      </main>
    </div>
  )
}
