export type TabItem = {
  key: string;
  title: string;
  children: React.ReactNode;
};

export type TabsProps = {
  active?: string;
  items: TabItem[];
  onChange?: (value: string) => void
};