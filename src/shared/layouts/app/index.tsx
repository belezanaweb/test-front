import * as React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

export default AppLayout;
