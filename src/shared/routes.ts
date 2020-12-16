/* eslint-disable security/detect-object-injection */
const routes = {
  home: '/'
}

export const getRoute = (
  path: string,
  params?: { [key: string]: string | number },
  routesConfig: any = routes
) =>
  path.split('.').reduce((routeBranch: any, pathItem: string) => {
    if (routeBranch && routeBranch[pathItem]) {
      const route = routeBranch[pathItem]
      if (typeof route === 'string') {
        if (!params || typeof params === 'undefined') {
          return route
        }

        return Object.entries(params).reduce((replaced, [key, value]) => {
          return replaced.replace(`:${key}`, String(value))
        }, route)
      }
      return routeBranch[pathItem]
    }
  }, routesConfig)

export default routes
