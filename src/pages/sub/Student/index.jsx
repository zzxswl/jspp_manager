import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import StudentService from 'services/Student';
import CommonService from 'services/Common';

import TableBody from './TableBody';

import { getDatas, confirmText } from 'utils/tools';

import { STUDENT_TH } from 'config/table_config';

import ListTitle from 'components/Common/ListTitle';
import TableHead from 'components/Common/TableHead';

import './index.scss';

const studentService = new StudentService();
const commonService = new CommonService();
const cfmText = confirmText('STUDENT');

export default function Student() {
  const [title] = useState('学生管理');
  const [studentData, setStudentData] = useState([]);
  const navigate = useNavigate();

  async function hanldeRefreshDataClick() {
    getStudentData();
  }

  async function getStudentData () {
    const result = await studentService.getStudentData();
    const errorCode = result.error_code;
    const data = result.data;

    getDatas(errorCode, data, navigate, () => {
      setStudentData(data);
    });
  }

  async function handleStatusClick(id, index) {
    const status = studentData[index].status;
    const text = cfmText(status);

    const cfm = window.confirm(text);

    if (cfm) {
      switch (status) {
        case 1:
          studentData[index].status = 0;
          break;
        case 0:
          studentData[index].status = 1;
          break;
        default:
          break;
      }

      setStudentData([...studentData]);

      const result = await commonService.changeStatus({
        id,
        status: studentData[index].status,
        field: 'STUDENT'
      });

      const errorCode = result.error_code;

      if (errorCode !== 0) {
        const st = studentData[index].status;
        alert(
          st ? '该学生上线失败' : '该学生下线失败'
        )
      }
    }
  }

  useEffect(() => {
    getStudentData();
  }, []);

  return (
    <div className="list-container">
      <ListTitle
        title={title}
        hanldeRefreshDataClick={hanldeRefreshDataClick}
      />
      <table className="list-table">
        <TableHead
          thData={STUDENT_TH}
        />
        <TableBody
          studentData={studentData}
          handleStatusClick={handleStatusClick}
        />
      </table>
    </div>
  )
}