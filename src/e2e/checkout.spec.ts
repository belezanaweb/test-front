import { PaymentFormProps } from '@/routes/payment'
import { test, expect } from '@playwright/test'

const paymentFormData: PaymentFormProps = {
  cartNumber: '1234567891011234',
  cartOwnerName: 'Bruce Wayne',
  cartExpirationDate: '12/2027',
  cartCVV: '170'
}

test('should complete a checkout successfully', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText(/Sacola/)).toBeVisible()
  await expect(page.getByText(/Pagamento/)).toBeVisible()
  await expect(page.getByText(/Confirmação/)).toBeVisible()

  await page.getByText(/Pagamento/).click()

  await expect(page.getByText(/Cartão de Crédito/)).toBeVisible()

  await page.getByRole('textbox', { name: /Número/i }).fill(paymentFormData.cartNumber)
  await page
    .getByRole('textbox', { name: /Nome do titular do cartão/i })
    .fill(paymentFormData.cartOwnerName)
  await page
    .getByRole('textbox', { name: /Data de validade/i })
    .fill(paymentFormData.cartExpirationDate)
  await page.getByRole('textbox', { name: /Código CVV/i }).fill(paymentFormData.cartCVV as string)

  const checkoutButton = page.getByRole('button', { name: /Finalizar pedido/i })

  await expect(checkoutButton).not.toBeDisabled()

  await checkoutButton.click()

  await expect(
    page.getByRole('heading', { level: 2, name: /Compra efetuada com sucesso/ })
  ).toBeVisible()
  await expect(page.getByText(paymentFormData.cartOwnerName)).toBeVisible()
  await expect(page.getByText(paymentFormData.cartExpirationDate)).toBeVisible()

  const goBackButton = page.getByRole('button', { name: /Voltar ao início do protótipo/i })

  await expect(goBackButton).toBeVisible()

  await goBackButton.click()

  await expect(page).toHaveTitle(/Test Front/i)
})

test('should show payment validation errors', async ({ page }) => {
  await page.goto('/')
  await page.getByText(/Pagamento/).click()

  await expect(page.getByText(/Cartão de Crédito/)).toBeVisible()

  await page.getByRole('textbox', { name: /Número/i }).fill('123')
  await expect(page.getByText(/Insira um número de cartão válido/)).toBeVisible()

  await page.getByRole('textbox', { name: /Nome do titular do cartão/i }).fill('Jão')
  await expect(page.getByText(/Insira um nome válido/)).toBeVisible()

  await page.getByRole('textbox', { name: /Data de validade/i }).fill('13/2022')
  await expect(page.getByText(/Insira uma data válida/)).toBeVisible()

  await page.getByRole('textbox', { name: /Código CVV/i }).fill('1')
  await expect(page.getByText(/Insira um CVV válido/)).toBeVisible()

  await expect(page.getByRole('button', { name: /Finalizar pedido/i })).toBeDisabled()
})

test('should block access to "/confirmation" page', async ({ page }) => {
  await page.goto('/')

  await page.getByText(/Pagamento/).click()

  await expect(page).toHaveURL(/\/payment/i)

  await page.getByText(/Confirmação/i).click()

  await expect(page).toHaveURL(/.*payment/i)
})
