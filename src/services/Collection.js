import HTTP from 'utils/http';
import { API } from 'config/config';

const COLLECTION = API.COLLECTION;

export default class CollectionService extends HTTP {
  getCollectionData () {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: COLLECTION.GET_COLLECTION_DATA,
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