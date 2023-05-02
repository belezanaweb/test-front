import { render } from '@/test/utils'

import { BrowserRouter } from 'react-router-dom'

import { Layout } from '.'

test('renders default state', () => {
  const { container } = render(<Layout />, { wrapper: BrowserRouter })

  expect(container).toMatchInlineSnapshot(`
    <div>
      <header
        class="flex flex-col items-center justify-center bg-white shadow-sm mb-5"
      >
        <nav
          class="flex"
        >
          <ul
            class="flex gap-6 border-b border-gray"
          >
            <li
              class="flex -mb-px"
            >
              <a
                class="text-sm md:text-lg px-3 py-2 text-black"
                href="/"
              >
                Sacola
              </a>
            </li>
            <li
              class="flex -mb-px"
            >
              <a
                class="text-sm md:text-lg px-3 py-2 text-black"
                href="/payment"
              >
                Pagamento
              </a>
            </li>
            <li
              class="flex -mb-px"
            >
              <a
                class="text-sm md:text-lg px-3 py-2 text-black"
                href="/confirmation"
              >
                Confirmação
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main
        class="container flex flex-col mx-auto"
      />
    </div>
  `)
})
