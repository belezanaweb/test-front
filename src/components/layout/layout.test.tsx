import { render } from '@/test/utils'

import { BrowserRouter } from 'react-router-dom'

import { Layout } from '.'

test('renders default state', () => {
  const { container } = render(<Layout />, { wrapper: BrowserRouter })

  expect(container).toMatchInlineSnapshot(`
    <div>
      <header
        class="mb-5 flex flex-col items-center justify-center bg-white shadow-sm"
      >
        <nav
          class="flex"
        >
          <ul
            class="flex gap-6 border-b border-gray"
          >
            <li
              class="-mb-px flex"
            >
              <a
                class="px-3 py-2 text-sm text-black md:text-lg"
                href="/"
              >
                Sacola
              </a>
            </li>
            <li
              class="-mb-px flex"
            >
              <a
                class="px-3 py-2 text-sm text-black md:text-lg"
                href="/payment"
              >
                Pagamento
              </a>
            </li>
            <li
              class="-mb-px flex"
            >
              <a
                class="px-3 py-2 text-sm text-black md:text-lg"
                href="/confirmation"
              >
                Confirmação
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main
        class="container mx-auto flex flex-col"
      />
    </div>
  `)
})
