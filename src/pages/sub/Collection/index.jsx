import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import CollectionService from 'services/Collection';
import CommonService from 'services/Common';

import TableBody from './TableBody';

import { getDatas, confirmText } from 'utils/tools';

import { COLLECTION_TH } from 'config/table_config';

import ListTitle from 'components/Common/ListTitle';
import TableHead from 'components/Common/TableHead';

import './index.scss';

const sliderService = new CollectionService();
const commonService = new CommonService();
const cfmText = confirmText('COLLECTION');

export default function Collection() {
  const [title] = useState('课程集合管理');
  const [collectionData, setCollectionData] = useState([]);
  const navigate = useNavigate();

  async function hanldeRefreshDataClick() {
    getCollectionData();
  }

  async function getCollectionData () {
    const result = await sliderService.getCollectionData();
    const errorCode = result.error_code;
    const data = result.data;

    getDatas(errorCode, data, navigate, () => {
      setCollectionData(data);
    });
  }

  async function handleStatusClick(id, index) {
    const status = collectionData[index].status;
    const text = cfmText(status);

    const cfm = window.confirm(text);

    if (cfm) {
      switch (status) {
        case 1:
          collectionData[index].status = 0;
          break;
        case 0:
          collectionData[index].status = 1;
          break;
        default:
          break;
      }

      setCollectionData([...collectionData]);

      const result = await commonService.changeStatus({
        id,
        status: collectionData[index].status,
        field: 'COLLECTION'
      });

      const errorCode = result.error_code;

      if (errorCode !== 0) {
        const st = collectionData[index].status;
        alert(
          st ? '该集合上架失败' : '该集合下架失败'
        )
      }
    }
  }

  useEffect(() => {
    getCollectionData();
  }, []);

  return (
    <div className="list-container">
      <ListTitle
        title={title}
        hanldeRefreshDataClick={hanldeRefreshDataClick}
      />
      <table className="list-table">
        <TableHead
          thData={COLLECTION_TH}
        />
        <TableBody
          collectionData={collectionData}
          handleStatusClick={handleStatusClick}
        />
      </table>
    </div>
  )
}