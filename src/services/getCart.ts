export default async function getCart(): Promise<Cart> {
  const url = import.meta.env.VITE_API_URL
  const response = await fetch(url)
  if (!response?.ok) {
    const errorContent = await response.json()
    console.error(errorContent)
    throw new Error(errorContent.toString ? errorContent.toString() : errorContent)
  }

  const cart = await response.json()

  return cart
}
