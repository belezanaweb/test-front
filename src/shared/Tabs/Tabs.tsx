import { useEffect, useMemo, useState } from 'react'

import { TabsContainer, TabList, TabNav, TabItem, Tab, TabContent, TabPanel } from './Tabs.styled'
import { TabsProps } from './Tabs.types'

export const Tabs = ({ items, active = items[0].key, onChange }: TabsProps) => {
  const [tabActive, setTabActive] = useState(active)

  const tabActiveIndex = useMemo(
    () => items.findIndex((item) => item.key === tabActive),
    [items, tabActive]
  )

  const handleChange = (value: string) => {
    setTabActive(value)
    onChange?.(value)
  }

  useEffect(() => {
    setTabActive(active)
  }, [active])

  return (
    <TabsContainer>
      <TabList>
        <TabNav>
          {items.map((item, index) => (
            <TabItem
              key={item.key}
              $done={index < tabActiveIndex}
              $isActive={tabActive === item.key}
            >
              <Tab onClick={() => !item.disabled && handleChange(item.key)}>
                <div className="tab-icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <span className="tab-title">{item.title}</span>
              </Tab>
            </TabItem>
          ))}
        </TabNav>
      </TabList>

      <TabContent>
        {items.map((item) => (
          <TabPanel key={item.key} $isActive={tabActive === item.key}>
            {item.children}
          </TabPanel>
        ))}
      </TabContent>
    </TabsContainer>
  )
}
