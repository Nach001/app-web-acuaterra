/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { UserRoute as UsersImport } from './routes/users'
import { MooduleRoute as ModuleImport } from './routes/module'
import { AuthRoute as AuthImport } from './routes/auth'
import { AboutRoute as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const UsersRoute = UsersImport.update({
  path: '/users',
  getParentRoute: () => rootRoute,
} as any)

const ModuleRoute = ModuleImport.update({
  path: '/module',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  path: '/auth',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/auth': {
      id: '/auth'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/module': {
      id: '/module'
      path: '/module'
      fullPath: '/module'
      preLoaderRoute: typeof ModuleImport
      parentRoute: typeof rootRoute
    }
    '/users': {
      id: '/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AboutRoute,
  AuthRoute,
  ModuleRoute,
  UsersRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.ts",
      "children": [
        "/",
        "/about",
        "/auth",
        "/module",
        "/users"
      ]
    },
    "/": {
      "filePath": "index.ts"
    },
    "/about": {
      "filePath": "about.ts"
    },
    "/auth": {
      "filePath": "auth.ts"
    },
    "/module": {
      "filePath": "module.ts"
    },
    "/users": {
      "filePath": "users.ts"
    }
  }
}
ROUTE_MANIFEST_END */
