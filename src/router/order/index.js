import orderList from '@/pages/order/orderList';
import auditOrderList from '@/pages/order/auditOrderList';
import createOrder from '@/pages/order/createOrder';

export default [
  {
    // 订单列表
    title:'订单管理',
    path: '/orderList',
    name: 'order-orderList',
    component: orderList
  },
  {
    // 退款审核订单列表
    title:'退款审核订单',
    path: '/auditOrderList',
    name: 'order-auditOrderList',
    component: auditOrderList
  },
  {
    // 创建订单
    title:'创建订单',
    path: '/createOrder',
    name: 'order-createOrder',
    component: createOrder
  }
];
