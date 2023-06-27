export const userData = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    deptId: '6',
    deptName: '研发部',
    role: 'admin',
    createTime: '2023-01-05 12:32:14',
    status: 0,
    remark: '拥有admin所有权限',
  },
  {
    id: 100,
    username: 'editor',
    password: '123456',
    deptId: '5',
    deptName: '产品部',
    role: 'editor',
    createTime: '2023-01-05 12:32:14',
    status: 1,
    remark: '拥有部分权限',
  },
  {
    id: 101,
    username: 'test',
    password: '123456',
    deptId: '10',
    deptName: '运营部',
    role: 'test',
    createTime: '2023-01-05 12:32:14',
    status: 1,
    remark: '拥有基础权限',
  },
]

export const roleData = [
  {
    id: 11,
    role: 'admin',
    roleName: 'admin',
    createTime: '2023-01-12 12:32:45',
    status: 1,
    remark: '系统管理员，拥有所有权限',
    menuIds: [
      'admin_dashboard',
      'admin_dashboard_analysis',
      'admin_dashboard_workbench',
      'admin_test',
      'admin_page',
      'admin_page_403',
      'admin_page_404',
      'admin_page_500',
      'admin_page_success',
      'admin_page_error',
      'admin_icon',
    ],
  },
  {
    id: 102,
    role: 'test',
    roleName: 'test',
    createTime: '2023-01-12 12:32:45',
    status: 1,
    remark: '普通用户，拥有大部分权限',
    menuIds: [
      'admin_dashboard',
      'admin_dashboard_analysis',
      'admin_dashboard_workbench',
      'admin_page',
      'admin_page_403',
      'admin_page_404',
      'admin_page_500',
      'admin_page_success',
      'admin_page_error',
    ],
  },
  {
    id: 103,
    role: 'editor',
    roleName: 'editor',
    createTime: '2023-01-12 12:32:45',
    status: 1,
    remark: '只能查看测试页面',
    menuIds: ['admin_test'],
  },
]
