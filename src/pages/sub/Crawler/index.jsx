import { useState } from 'react';

import CrawlerService from 'services/Crawler';

import { CRAWLER_TH } from 'config/table_config';
import CRAWLERDATA from 'config/crawler_config';


import ListTitle from 'components/Common/ListTitle';
import TableHead from 'components/Common/TableHead';
import TableBody from './TableBody';

import './index.scss';

const crawlerService = new CrawlerService();

export default function Crawler() {
  const [title] = useState('数据爬虫管理');
  const [crawlerData, setCrawlerData] = useState(CRAWLERDATA);

  async function crawlAction(apiName, index) {
    const result = await crawlerService.crawlAction(apiName),
      errorCode = result.error_code,
      loading = crawlerData[index].loading;

    crawlerData[index].loading = !loading;
    setCrawlerData([...crawlerData]);
    if (errorCode === 0) {
      alert('数据爬取成功');
      return;
    }

    alert(`数据爬取失败(error_code: ${errorCode})`);
  }

  async function handleCrawlClick(apiName, index) {
    crawlerData[index].loading = !crawlerData[index].loading

    setCrawlerData([...crawlerData]);

    crawlAction(apiName, index);
  }

  return (
    <div className="list-container">
      <ListTitle
        title={title}
        refreshHide={true}
      />
      <table className="list-table">
        <TableHead
          thData={CRAWLER_TH}
        />
        <TableBody
          crawlerData={crawlerData}
          handleCrawlClick={handleCrawlClick}
        />
      </table>
    </div>
  )
}