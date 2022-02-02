import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import RecomCourseService from 'services/RecomCourse';
import CommonService from 'services/Common';

import TableBody from './TableBody';

import { getDatas, confirmText } from 'utils/tools';

import { RECOM_COURSE_TH } from 'config/table_config';

import ListTitle from 'components/Common/ListTitle';
import TableHead from 'components/Common/TableHead';

import './index.scss';

const recomCourseService = new RecomCourseService();
const commonService = new CommonService();
const cfmText= confirmText('RECOM_COURSE');

export default function RecomCourse(props) {
  const [title] = useState('推荐课程管理');
  const [recomCourseData, setRecomCourseData] = useState([]);
  const navigate = useNavigate();

  async function hanldeRefreshDataClick() {
    getRecomCourseData();
  }

  async function getRecomCourseData () {
    const result = await recomCourseService.getRecomCourseData();
    const errorCode = result.error_code;
    const data = result.data;

    getDatas(errorCode, data, navigate, () => {
      setRecomCourseData(data);
    });
  }

  async function handleStatusClick(cid, index) {
    const status = recomCourseData[index].status;
    const text = cfmText(status);

    const cfm = window.confirm(text);

    if (cfm) {
      switch (status) {
        case 1:
          recomCourseData[index].status = 0;
          break;
        case 0:
          recomCourseData[index].status = 1;
          break;
        default:
          break;
      }

      setRecomCourseData([...recomCourseData]);

      const result = await commonService.changeStatus({
        id: cid,
        status: recomCourseData[index].status,
        field: 'RECOM_COURSE'
      });

      const errorCode = result.error_code;

      if (errorCode !== 0) {
        const st = recomCourseData[index].status;
        alert(
          st ? '该课程上架失败' : '该课程下架失败'
        )
      }
    }
  }

  useEffect(() => {
    getRecomCourseData();
  }, []);

  return (
    <div className="list-container">
      <ListTitle
        title={title}
        hanldeRefreshDataClick={hanldeRefreshDataClick}
      />
      <table className="list-table">
        <TableHead
          thData={RECOM_COURSE_TH}
        />
        <TableBody
          recomCourseData={recomCourseData}
          handleStatusClick={handleStatusClick}
        />
      </table>
    </div>
  )
}