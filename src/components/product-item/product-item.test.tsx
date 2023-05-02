import { render } from '@/test/utils'

import { ProductItem } from '.'

import { apiMockData } from '../../mocks/handlers'

test('renders children components', () => {
  const { container } = render(<ProductItem product={apiMockData.items[0].product} />)

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="flex items-center gap-4"
      >
        <img
          alt="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
          class="w-16 h-16"
          src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
        />
        <p
          class="text-xs flex-1"
        >
          L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g
        </p>
        <div
          class="flex flex-col"
        >
          <s
            class="text-sm text-[#9B9B9B]"
            data-testid="product-discount-price"
          >
            R$ 243,90
          </s>
          <p
            class="text-sm text-black font-bold"
            data-testid="product-price"
          >
            R$ 225,90
          </p>
        </div>
      </div>
    </div>
  `)
})

test('renders with price data', () => {
  const { queryByTestId } = render(<ProductItem product={apiMockData.items[0].product} />)

  expect(queryByTestId('product-price')).toBeInTheDocument()
  expect(queryByTestId('product-discount-price')).toBeInTheDocument()
})

test('renders without price data', () => {
  const { queryByTestId } = render(
    <ProductItem showPrice={false} product={apiMockData.items[0].product} />
  )

  expect(queryByTestId('product-price')).not.toBeInTheDocument()
})

test('renders without the discount price', () => {
  let product = apiMockData.items[0].product

  product.priceSpecification.discount = 0

  const { queryByTestId } = render(<ProductItem product={product} />)

  expect(queryByTestId('product-discount-price')).not.toBeInTheDocument()
})
