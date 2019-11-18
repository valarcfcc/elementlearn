const ele = resolve => require(['@/components/HelloWorld'], resolve);
const test = () => import('@/components/ele');
const table = () => import('@/components/tableexpend');
export default [{
    path: '/hi',
    name: 'HelloWorld',
    component: ele
  },
  {
    path: '/test',
    name: 'HelloWorld',
    component: test
  },
  {
    path: '/table',
    name: 'table',
    component: table
  }
]
