import { Outlet } from 'react-router-dom';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { Header } from './Header';
import { usePortalElement } from '../hooks/usePortalElement';

export type FooterProps = {
  children: ReactNode;
};

function Footer({ children }: FooterProps) {
  const target = usePortalElement('footer-content');

  if (target) {
    return createPortal(children, target);
  }

  return null;
}

export function Layout() {
  return (
    <div className="flex flex-col">
      <Header className="fixed top-0 w-full" />

      <main className="flex py-6 px-2 overflow-auto mt-10 mb-52">
        <Outlet />
      </main>

      <footer id="footer-content" className="fixed bottom-0 w-full" />
    </div>
  );
}

Layout.Footer = Footer;
