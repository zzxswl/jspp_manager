import HTTP from 'utils/http';
import { API } from 'config/config';

const TEACHER = API.TEACHER;

export default class TeacherService extends HTTP {
  getTeacherData () {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: TEACHER.GET_TEACHER_DATA,
        success (data) {
          resolve(data);
        },
        error (error) {
          alert('网络请求失败');
        }
      });
    });
  }

  selectStarTeacher (data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: TEACHER.SELECT_STAR_TEACHER,
        data,
        success (data) {
          resolve(data);
        },
        error (error) {
          alert('网络请求失败');
        }
      });
    });
  }
}