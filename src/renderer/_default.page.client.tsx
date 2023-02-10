import { hydrateRoot } from 'react-dom/client'
import type { PageContextClient } from './types'

export async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  hydrateRoot(
    document.getElementById('page-view')!,
    <Page {...pageProps} />
  )
}
