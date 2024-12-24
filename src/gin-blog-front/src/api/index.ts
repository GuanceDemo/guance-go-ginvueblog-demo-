import { request } from '@/utils'
import type { RequestConfig } from '~/types/axios'

// 生成一个32位的十六进制字符串作为 traceid
const generateTraceId = () => {
  return [...Array(32)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
}

export default {
  login: (data: any = {}) => request.post('/login', data, { headers: { traceid: generateTraceId() } }),
  register: (data: any = {}) => request.post('/register', data, { headers: { traceid: generateTraceId() } }),
  logout: () => request.get('/logout', { headers: { traceid: generateTraceId() } }),
  about: () => request.get('/about', { headers: { traceid: generateTraceId() } }),

  // 发送验证码
  sendCode: (params?: { email: string }) => request.get('/code', { params, headers: { traceid: generateTraceId() } }),

  // 首页数据
  getHomeData: () => request.get('/home', { headers: { traceid: generateTraceId() } }),
  // 首页文章列表
  getArticles: (params?: any) => request.get('/article/list', { params, headers: { traceid: generateTraceId() } }),
  // 文章详情
  getArticleDetail: (id: number) => request.get(`/article/${id}`, { headers: { traceid: generateTraceId() } }),
  // 文章归档
  getArchives: (params?: any) => request.get('/article/archive', { params, headers: { traceid: generateTraceId() } }),
  // 文章搜索
  searchArticles: (params?: any) => request.get('/article/search', { params, headers: { traceid: generateTraceId() } }),

  // 菜单列表
  getCategorys: () => request.get('/category/list', { headers: { traceid: generateTraceId() } }),
  // 标签列表
  getTags: () => request.get('/tag/list', { headers: { traceid: generateTraceId() } }),
  // 留言列表
  getMessages: () => request.get('/message/list', { headers: { traceid: generateTraceId() } }),
  // 友链列表
  getLinks: () => request.get('/link/list', { headers: { traceid: generateTraceId() } }),
  // 评论列表
  getComments: (params?: any) => request.get('/comment/list', { params, headers: { traceid: generateTraceId() } }),
  // 评论回复列表
  getCommentReplies: (id: number, params?: any) => request.get(`/comment/replies/${id}`, { params, headers: { traceid: generateTraceId() } }),

  // ! 需要 Token 的接口
  // 根据 token 获取当前用户信息
  getUser: () => request.get('/user/info', { needToken: true, headers: { traceid: generateTraceId() } } as RequestConfig),
  // 修改当前用户信息
  updateUser: (data: any) => request.put('/user/info', data, { needToken: true, headers: { traceid: generateTraceId() } } as RequestConfig),
  // 留言
  saveMessage: (data: any) => request.post('/message', data, { needToken: true, headers: { traceid: generateTraceId() } } as RequestConfig),
  // 评论
  saveComment: (data: any) => request.post('/comment', data, { needToken: true, headers: { traceid: generateTraceId() } } as RequestConfig),
  // 点赞评论
  saveLikeComment: (id: number) => request.get(`/comment/like/${id}`, { needToken: true, headers: { traceid: generateTraceId() } } as RequestConfig),
  // 点赞文章
  saveLikeArticle: (id: number) => request.get(`/article/like/${id}`, { needToken: true, headers: { traceid: generateTraceId() } } as RequestConfig),
}
