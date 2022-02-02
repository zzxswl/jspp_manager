import HTTP from 'utils/http';
import { API } from 'config/config';

const RECOM_COURSE = API.RECOM_COURSE;
const COMMON = API.COMMON;

export default class RecomCourseService extends HTTP {
  getRecomCourseData () {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: RECOM_COURSE.GET_RECOM_COURSE_DATA,
        success (data) {
          resolve(data);
        },
        error (error) {
          alert('网络请求失败');
        }
      })
    })
  }
}