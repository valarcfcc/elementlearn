const ele = resolve => require(['@/components/HelloWorld'], resolve);
const test = () => import('@/components/ele');
const table = () => import('@/components/tableexpend');
const table1 = () => import('@/components/tableexpend1');
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
  },
  {
    path: '/table1',
    name: 'table1',
    component: table1
  }
]
