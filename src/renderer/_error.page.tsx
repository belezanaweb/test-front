export function Page({ is404 }: { is404: boolean }) {
  if (is404) {
    return <h1>404 Page Not Found</h1>
  } else {
    return <h1>500 Internal Server Error</h1>
  }
}