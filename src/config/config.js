const BASE_URL = 'http://localhost:3002/';

const API = {
  LOGIN: {
    LOGIN_ACTION: BASE_URL + 'admin/login_action',
    LOGIN_CHECK: BASE_URL + 'admin/login_check',
    LOGOUT_ACTION: BASE_URL + 'admin/logout_action'
  },
  COURSE: {
    GET_COURSE_DATA: BASE_URL + 'get_courses',
    CHANGE_COURSE_FIELD: BASE_URL + 'change_course_field',
  },
  RECOM_COURSE: {
    GET_RECOM_COURSE_DATA: BASE_URL + 'get_recom_courses',
  },
  SLIDER: {
    GET_SLIDER_DATA: BASE_URL + 'get_sliders'
  },
  COLLECTION: {
    GET_COLLECTION_DATA: BASE_URL + 'get_collections'
  },
  TEACHER: {
    GET_TEACHER_DATA: BASE_URL + 'get_teachers',
    SELECT_STAR_TEACHER: BASE_URL + 'select_star_teacher'
  },
  STUDENT: {
    GET_STUDENT_DATA: BASE_URL + 'get_students'
  },
  CRAWLER: {
    // CRAWL_ACTION: BASE_URL + 'crawler/crawl_action'
    CRAWL_ACTION: BASE_URL + 'crawler/'
  },
  COMMON: {
    CHANGE_STATUS: BASE_URL + 'change_status'
  }
}

const NAV = [
  {
    field: 'course',
    title: '课程管理' // 课程上下架，课程分类选择
  },
  {
    field: 'recom_course',
    title: '推荐课程' // 推荐课程的上下架
  },
  {
    field: 'slider',
    title: '轮播图管理' // 轮播图数据上下线
  },
  {
    field: 'collection',
    title: '课程集合管理' // 课程集合的上下线
  },
  {
    field: 'teacher',
    title: '老师管理' // 老师的上下线  明星老师的设置
  },
  {
    field: 'student',
    title: '学生管理' // 学生的上下线
  },
  {
    field: 'crawler',
    title: '数据爬取' // 爬取各种数据
  }
]

export {
  API,
  NAV
}