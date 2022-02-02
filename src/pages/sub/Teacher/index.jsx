import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import TeacherService from 'services/Teacher';
import CommonService from 'services/Common';

import TableBody from './TableBody';

import { getDatas, confirmText } from 'utils/tools';

import { TEACHER_TH } from 'config/table_config';

import ListTitle from 'components/Common/ListTitle';
import TableHead from 'components/Common/TableHead';

import './index.scss';

const teacherService = new TeacherService();
const commonService = new CommonService();
const cfmText = confirmText('TEACHER');
const _cfmText = confirmText('STAR_TEACHER');

export default function Teacher() {
  const [title] = useState('老师管理');
  const [teacherData, setTeacherData] = useState([]);
  const navigate = useNavigate();

  async function hanldeRefreshDataClick() {
    getTeacherData();
  }

  async function getTeacherData () {
    const result = await teacherService.getTeacherData();
    const errorCode = result.error_code;
    const data = result.data;

    getDatas(errorCode, data, navigate, () => {
      setTeacherData(data);
    });
  }

  async function handleStatusClick(id, index) {
    const status = teacherData[index].status;
    const text = cfmText(status);

    const cfm = window.confirm(text);

    if (cfm) {
      switch (status) {
        case 1:
          teacherData[index].status = 0;
          break;
        case 0:
          teacherData[index].status = 1;
          break;
        default:
          break;
      }

      setTeacherData([...teacherData]);

      const result = await commonService.changeStatus({
        id,
        status: teacherData[index].status,
        field: 'TEACHER'
      });

      const errorCode = result.error_code;

      if (errorCode !== 0) {
        const st = teacherData[index].status;
        alert(
          st ? '该老师上线失败' : '该老师下线失败'
        )
      }
    }
  }

  async function handleStarClick(id, index) {
    const isStar = teacherData[index].isStar;
    const text = _cfmText(isStar)

    const cfm = window.confirm(text);

    if (cfm) {
      switch (isStar) {
        case 1:
          teacherData[index].isStar = 0;
          break;
        case 0:
          teacherData[index].isStar = 1;
          break;
        default:
          break;
      }

      setTeacherData([...teacherData]);

      const result = await teacherService.selectStarTeacher({
        id,
        isStar: teacherData[index].isStar,
      });

      const errorCode = result.error_code;

      if (errorCode !== 0) {
        const isStar = teacherData[index].isStar;
        alert(
          isStar ? '设置该老师为明星老师失败' : '设置该老师为非明星老师失败'
        )
      }
    }
  }

  useEffect(() => {
    getTeacherData();
  }, []);

  return (
    <div className="list-container">
      <ListTitle
        title={title}
        hanldeRefreshDataClick={hanldeRefreshDataClick}
      />
      <table className="list-table">
        <TableHead
          thData={TEACHER_TH}
        />
        <TableBody
          teacherData={teacherData}
          handleStatusClick={handleStatusClick}
          handleStarClick={handleStarClick}
        />
      </table>
    </div>
  )
}