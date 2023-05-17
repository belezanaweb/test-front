import { useState } from "react";
import { TabsProps } from './Tabs.types'

export const Tabs = ({ items, active = items[0].key, onChange }: TabsProps) => {
  const [tabActive, setTabActive] = useState(active)

  const handleChange = (value: string) => {
    setTabActive(value)
    onChange?.(value)
  }

  return (
    <div className="tabs">
      {items.map((item) => (
        <div className="tab">
          <div className="tab-item" onClick={() => handleChange(item.key)}>
            {item.title}
          </div>
        </div>
      ))}

      {items.map((item) => (
        <div
          className="tab-content"
          style={{ display: tabActive === item.key ? 'block' : 'none' }}
        >
          {item.children}
        </div>
      ))}
    </div>
  );
};