const ele = resolve => require(['@/components/HelloWorld'], resolve);
const test = () => import('@/components/ele');
export default [{
    path: '/hi',
    name: 'HelloWorld',
    component: ele
  },
  {
    path: '/test',
    name: 'HelloWorld',
    component: test
  }
]
