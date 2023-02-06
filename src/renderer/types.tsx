import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'

type Page = (pageProps: PageProps) => React.ReactElement
export type PageProps = {}

export type PageContextCustom = {
  Page: Page
  pageProps?: PageProps
  urlPathname: string
  exports: {
    documentProps?: {
      title?: string
      description?: string
    }
  }
}

export type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom
export type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom

export type PageContext = PageContextClient | PageContextServer
