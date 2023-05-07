import * as TabsComponent from './tabs'
export { useTabs, useTabsContext } from './tabs'

export const Tabs = {
  Root: TabsComponent.TabsRoot,
  List: TabsComponent.TabsList,
  Trigger: TabsComponent.TabsTrigger,
  Content: TabsComponent.TabsContent,
}
