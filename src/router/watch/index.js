// import routes from './element'
export default [
  // ...routes,
  {
    path: '/watch',
    name: 'watch',
    component: () => import('@/components/watch')
  },
]
