const click = () => import('@/components/click/click');
export default [{
  path: '/click',
  name: 'click',
  component: click
}, {
  path: '/request',
  name: 'request',
  component: () => import('@/components/request')
}]
