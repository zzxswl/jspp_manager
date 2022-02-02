import HTTP from 'utils/http';
import { API } from 'config/config';

const CRAWLER = API.CRAWLER;

export default class CrawlerService extends HTTP {
  crawlAction (apiName) {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: CRAWLER.CRAWL_ACTION + apiName,
        success(data) {
          resolve(data);
        },
        error(error) {
          alert(error);
          alert('网络请求失败');
        }
      })
    })
  }
}