import HTTP from 'utils/http';
import { API } from 'config/config';

const SLIDER = API.SLIDER;

export default class SliderService extends HTTP {
  getSliderData () {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: SLIDER.GET_SLIDER_DATA,
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