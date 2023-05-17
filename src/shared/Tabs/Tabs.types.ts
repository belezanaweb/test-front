export type TabItem = {
  key: string;
  title: string;
  icon: string;
  children: React.ReactNode;
};

export type TabsProps = {
  active?: string;
  items: TabItem[];
  onChange?: (value: string) => void
};

export type TabItemProps = {
  isActive?: boolean;
};

export type TabPanelProps = {
  isActive?: boolean;
};