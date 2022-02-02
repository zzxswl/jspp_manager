import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import SliderService from 'services/Slider';
import CommonService from 'services/Common';

import TableBody from './TableBody';

import { getDatas, confirmText } from 'utils/tools';

import { SLIDER_TH } from 'config/table_config';

import ListTitle from 'components/Common/ListTitle';
import TableHead from 'components/Common/TableHead';

import './index.scss';

const sliderService = new SliderService();
const commonService = new CommonService();
const cfmText = confirmText('SLIDER');

export default function Slider() {
  const [title] = useState('轮播图管理');
  const [sliderData, setSliderData] = useState([]);
  const navigate = useNavigate();

  async function hanldeRefreshDataClick() {
    getSliderData();
  }

  async function getSliderData () {
    const result = await sliderService.getSliderData();
    const errorCode = result.error_code;
    const data = result.data;

    getDatas(errorCode, data, navigate, () => {
      setSliderData(data);
    });
  }

  async function handleStatusClick(id, index) {
    const status = sliderData[index].status;
    const text = cfmText(status);

    const cfm = window.confirm(text);

    if (cfm) {
      switch (status) {
        case 1:
          sliderData[index].status = 0;
          break;
        case 0:
          sliderData[index].status = 1;
          break;
        default:
          break;
      }

      setSliderData([...sliderData]);

      const result = await commonService.changeStatus({
        id,
        status: sliderData[index].status,
        field: 'SLIDER'
      });

      const errorCode = result.error_code;

      if (errorCode !== 0) {
        const st = sliderData[index].status;
        alert(
          st ? '该轮播图上架失败' : '该轮播图下架失败'
        )
      }
    }
  }

  useEffect(() => {
    getSliderData();
  }, []);

  return (
    <div className="list-container">
      <ListTitle
        title={title}
        hanldeRefreshDataClick={hanldeRefreshDataClick}
      />
      <table className="list-table">
        <TableHead
          thData={SLIDER_TH}
        />
        <TableBody
          sliderData={sliderData}
          handleStatusClick={handleStatusClick}
        />
      </table>
    </div>
  )
}