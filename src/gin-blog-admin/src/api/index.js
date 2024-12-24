import { request } from '@/utils'

// 生成一个唯一的 traceid
const generateTraceId = () => {
  return 'trace-' + Math.random().toString(36).substr(2, 9);
}

export default {
  // refreshToken: () => request.post('/auth/refreshToken', null, { noNeedTip: true }),
  report: () => request.post('/report', { traceid: generateTraceId() }), // 上报用户信息
  getHomeInfo: () => request.get('/home', { params: { traceid: generateTraceId() } }), // 获取首页信息
  login: data => request.post('/login', { ...data, traceid: generateTraceId() }, { noNeedToken: true }),
  logout: () => request.get('/logout', { params: { traceid: generateTraceId() } }),

  // 文章相关接口
  getArticles: (params = {}) => request.get('/article/list', { params: { ...params, traceid: generateTraceId() } }),
  getArticleById: id => request.get(`/article/${id}`, { params: { traceid: generateTraceId() } }),
  saveOrUpdateArticle: data => request.post('/article', { ...data, traceid: generateTraceId() }),
  deleteArticle: (data = []) => request.delete('/article', { data: { ...data, traceid: generateTraceId() } }), // 物理删除
  softDeleteArticle: data => request.put('/article/soft-delete', { ...data, traceid: generateTraceId() }), // 软删除
  updateArticleTop: data => request.put('/article/top', { ...data, traceid: generateTraceId() }), // 修改文章置顶
  exportArticles: (data = []) => request.post('/article/export', { ...data, traceid: generateTraceId() }), // 导出文章
  importArticles: data => request.post('/article/import', { ...data, traceid: generateTraceId() }), // 导入文章

  // 分类相关接口
  getCategorys: (params = {}) => request.get('/category/list', { params: { ...params, traceid: generateTraceId() } }),
  saveOrUpdateCategory: data => request.post('/category', { ...data, traceid: generateTraceId() }),
  deleteCategory: (data = []) => request.delete('/category', { data: { ...data, traceid: generateTraceId() } }),
  getCategoryOption: () => request.get('/category/option', { params: { traceid: generateTraceId() } }),

  // 标签相关接口
  getTags: (params = {}) => request.get('/tag/list', { params: { ...params, traceid: generateTraceId() } }),
  saveOrUpdateTag: data => request.post('/tag', { ...data, traceid: generateTraceId() }),
  deleteTag: (data = []) => request.delete('/tag', { data: { ...data, traceid: generateTraceId() } }),
  getTagOption: () => request.get('/tag/option', { params: { traceid: generateTraceId() } }),

  // 留言相关接口
  getMessages: (params = {}) => request.get('/message/list', { params: { ...params, traceid: generateTraceId() } }),
  deleteMessages: (data = []) => request.delete('/message', { data: { ...data, traceid: generateTraceId() } }),
  updateMessageReview: data => request.put('/message/review', { ...data, traceid: generateTraceId() }), // 修改评论审核

  // 评论相关接口
  getComments: (params = {}) => request.get('/comment/list', { params: { ...params, traceid: generateTraceId() } }),
  deleteComments: (data = []) => request.delete('/comment', { data: { ...data, traceid: generateTraceId() } }),
  updateCommentReview: data => request.put('/comment/review', { ...data, traceid: generateTraceId() }), // 修改评论审核

  // 友链相关接口
  getLinks: (params = {}) => request.get('/link/list', { params: { ...params, traceid: generateTraceId() } }),
  deleteLinks: (data = []) => request.delete('/link', { data: { ...data, traceid: generateTraceId() } }),
  saveOrUpdateLink: data => request.post('/link', { ...data, traceid: generateTraceId() }),

  // 日志相关接口
  getOperationLogs: (params = {}) => request.get('/operation/log/list', { params: { ...params, traceid: generateTraceId() } }),
  deleteOperationLogs: (data = []) => request.delete('/operation/log', { data: { ...data, traceid: generateTraceId() } }),

  // 用户相关接口
  getUser: () => request.get('/user/info', { params: { traceid: generateTraceId() } }),
  updateCurrent: data => request.put('/user/current', { ...data, traceid: generateTraceId() }), // 更新当前用户信息
  updateCurrentPassword: data => request.put('/user/current/password', { ...data, traceid: generateTraceId() }), // 修改当前用户密码
  getUsers: (params = {}) => request.get('/user/list', { params: { ...params, traceid: generateTraceId() } }),
  updateUser: data => request.put('/user', { ...data, traceid: generateTraceId() }),
  updateUserDisable: data => request.put('/user/disable', { ...data, traceid: generateTraceId() }),
  getOnlineUsers: () => request.get('/user/online', { params: { traceid: generateTraceId() } }), // 在线用户列表
  forceOfflineUser: data => request.delete('/user/offline', { data: { ...data, traceid: generateTraceId() } }), // 强制离线

  // 博客设置相关接口
  getBlogConfig: () => request.get('/setting/blog-config', { params: { traceid: generateTraceId() } }),
  updateBlogConfig: data => request.put('/setting/blog-config', { ...data, traceid: generateTraceId() }),
  getAbout: () => request.get('/setting/about', { params: { traceid: generateTraceId() } }),
  updateAbout: data => request.put('/setting/about', { ...data, traceid: generateTraceId() }),

  // 权限管理相关接口
  // 菜单
  getUserMenus: () => request.get('/menu/user/list', { params: { traceid: generateTraceId() } }), // 获取当前用户的菜单
  getMenus: (params = {}) => request.get('/menu/list', { params: { ...params, traceid: generateTraceId() } }),
  saveOrUpdateMenu: data => request.post('/menu', { ...data, traceid: generateTraceId() }),
  deleteMenu: id => request.delete(`/menu/${id}`, { params: { traceid: generateTraceId() } }),
  getMenuOption: () => request.get('/menu/option', { params: { traceid: generateTraceId() } }),
  // 资源
  getResources: (params = {}) => request.get('/resource/list', { params: { ...params, traceid: generateTraceId() } }),
  saveOrUpdateResource: data => request.post('/resource', { ...data, traceid: generateTraceId() }),
  deleteResource: id => request.delete(`/resource/${id}`, { params: { traceid: generateTraceId() } }),
  updateResourceAnonymous: data => request.put('/resource/anonymous', { ...data, traceid: generateTraceId() }),
  getResourceOption: () => request.get('/resource/option', { params: { traceid: generateTraceId() } }),
  // 角色
  getRoles: (params = {}) => request.get('/role/list', { params: { ...params, traceid: generateTraceId() } }),
  saveOrUpdateRole: data => request.post('/role', { ...data, traceid: generateTraceId() }),
  deleteRole: (data = []) => request.delete('/role', { data: { ...data, traceid: generateTraceId() } }),
  getRoleOption: () => request.get('/role/option', { params: { traceid: generateTraceId() } }),

  // 页面相关接口
  getPages: () => request.get('/page/list', { params: { traceid: generateTraceId() } }),
  saveOrUpdatePage: data => request.post('/page', { ...data, traceid: generateTraceId() }),
  deletePage: (data = []) => request.delete('/page', { data: { ...data, traceid: generateTraceId() } }),
}
