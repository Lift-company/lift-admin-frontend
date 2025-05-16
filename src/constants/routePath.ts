enum APP_ROUTES {
  DEFAULT = 'default',
  NOT_FOUND = 'notFound',
  DASHBOARD = 'dashboard',
  USERS = 'users',
  PRODUCTS = 'products',
  SETTINGS = 'settings',
}

export const RoutePath: Record<APP_ROUTES, string> = {
  [APP_ROUTES.DEFAULT]: '/',
  [APP_ROUTES.NOT_FOUND]: '*',
  [APP_ROUTES.DASHBOARD]: '/dashboard',
  [APP_ROUTES.USERS]: '/users',
  [APP_ROUTES.PRODUCTS]: '/products',
  [APP_ROUTES.SETTINGS]: '/settings',
}
