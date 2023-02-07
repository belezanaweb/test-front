import './style.scss'

type TabsProps = {
  children: any[]
  selected: string
  onChange: (selected: string) => void
}

export function Tabs({ children, selected, onChange  }: TabsProps) {
  const sections = children
  return (
    <div className='tabs'>
      <nav className='tabs-bar'>
        { 
          children.map(section => 
            <button 
              className={section?.key === selected ? 'tab-button-selected' : 'tab-button'} 
              key={section?.key} onClick={() => onChange(section?.key)}>
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