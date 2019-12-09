const ele = resolve => require(['@/components/HelloWorld'], resolve);
const test = () => import('@/components/ele');
const table = () => import('@/components/tableexpend');
export default [{
    path: '/ele',
    name: 'ele',
    component: ele
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/table',
    name: 'table',
    component: table
  }
]
