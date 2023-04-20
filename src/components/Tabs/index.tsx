import { useState, useEffect } from 'react'
import * as Styled from './styled'
import { TabsProps } from './interfaces'

const Tabs = ({ Tabs, value, onChange }: TabsProps) => {
  const [useCurrentTab, setCurrentTab] = useState(value)

  useEffect(() => {
    setCurrentTab(value)
  }, [value])

  return (
    <Styled.Tabs>
      <Styled.NavWrapper>
        <Styled.Nav>
          {Tabs.map((tab, i) => (
            <Styled.NavItem
              onClick={() => {
                setCurrentTab(i)
                onChange(i)
              }}
              active={i === useCurrentTab}
              disabled={tab.disabled}
              key={i}
            >
              {tab.title}
            </Styled.NavItem>
          ))}
        </Styled.Nav>
      </Styled.NavWrapper>
      <Styled.OutletWrapper>{Tabs.find((_, i) => useCurrentTab === i).content}</Styled.OutletWrapper>
    </Styled.Tabs>
  )
}

export default Tabs
