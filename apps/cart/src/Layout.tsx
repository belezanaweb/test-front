import { Outlet } from 'react-router-dom';

import { CartInformation } from './components/CartInformation';
import { Header } from './components/Header';

export function Layout() {
  return (
    <div className="flex flex-col">
      <Header className="fixed top-0 w-full" />

      <main className="flex py-6 px-2 overflow-auto mt-10 mb-52">
        <Outlet />
      </main>

      <footer className="fixed bottom-0 w-full">
        <CartInformation />
      </footer>
    </div>
  );
}
