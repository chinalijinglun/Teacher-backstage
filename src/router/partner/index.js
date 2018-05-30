import partnerList from '@/pages/partner/partnerList';
import partnerEdit from '@/pages/partner/partnerEdit';

export default [
  {
    // 合作方列表
    title:'合作方列表',
    path: 'partnerList',
    name: 'partner-partnerList',
    component: partnerList
  },
  {
    // 添加合作方
    title:'添加合作方',
    path: 'partnerEdit',
    name: 'partner-partnerEdit',
    component: partnerEdit
  }
];
