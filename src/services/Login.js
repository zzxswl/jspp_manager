import HTTP from 'utils/http';
import { API } from 'config/config';

const LOGIN = API.LOGIN;

export default class LoginService extends HTTP {
  loginAction(userInfo) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: LOGIN.LOGIN_ACTION,
        data: userInfo,
        success(data) {
          resolve(data);
        },
        error(error) {
          alert('网络请求失败');
          window.location.reload();
        }
      });
    });
  }

  loginCheck() {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: LOGIN.LOGIN_CHECK,
        success(data) {
          resolve(data);
        },
        error(error) {
          alert('网络请求失败');
          window.location.reload();
        }
      })
    })
  }

  logoutAction() {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: LOGIN.LOGOUT_ACTION,
        success(data) {
          resolve(data);
        },
        error(error) {
          alert('网络请求失败');
          window.location.reload();
        }
      })
    })
  }
}