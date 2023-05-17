import { useState } from "react";

import { TabsContainer, TabList, TabNav, TabItem, Tab, TabContent, TabPanel } from './Tabs.styled'
import { TabsProps } from './Tabs.types'

export const Tabs = ({ items, active = items[0].key, onChange }: TabsProps) => {
  const [tabActive, setTabActive] = useState(active)

  const handleChange = (value: string) => {
    setTabActive(value)
    onChange?.(value)
  }

  return (
    <TabsContainer>
      <TabList>
        <TabNav>
          {items.map((item) => (
            <TabItem isActive={tabActive === item.key}>
              <Tab onClick={() => handleChange(item.key)}>
                <div className="icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <span className="title">
                  {item.title}
                </span>
              </Tab>
            </TabItem>
          ))}
        </TabNav>
      </TabList>

      <TabContent>
        {items.map((item) => (
          <TabPanel isActive={tabActive === item.key}>
            {item.children}
          </TabPanel>
        ))}
      </TabContent>
    </TabsContainer>
  );
};