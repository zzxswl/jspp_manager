import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CourseService from 'services/Course';
import CommonService from 'services/Common';

import { getDatas, confirmText } from 'utils/tools';

import { COURSE_TH } from 'config/table_config';

import ListTitle from 'components/Common/ListTitle';
import TableHead from 'components/Common/TableHead';
import TableBody from './TableBody';

const courseService = new CourseService();
const commonService = new CommonService();
const cfmText = confirmText('COURSE');

export default function Course() {
  const [title] = useState('课程管理');
  const [courseData, setCourseData] = useState([]);
  const [fieldData, setFieldData] = useState([]);
  const navigate = useNavigate();

  async function getCourseData() {
    const result = await courseService.getCourseData();
    const errorCode = result.error_code;
    const data = result.data;

    getDatas(errorCode, data, navigate, () => {
      const { courseData, fieldData } = data;

      courseData.forEach((cItem, cIndex) => {
        if (cItem.field === 0) {
          cItem.fieldTitle = '无分类';
        }

        fieldData.forEach((fItem, fIndex) => {
          if (cItem.field === fItem.id) {
            cItem.fieldTitle = fItem.title;
          }
        });
      });

      setCourseData(courseData);
      setFieldData(fieldData);
      console.log(courseData);
    })
  }

  function hanldeRefreshDataClick() {
    getCourseData();
  }

  async function handleStatusClick(cid, index) {
    const status = courseData[index].status;
    const text = cfmText(status);

    const cfm = window.confirm(text);

    if (cfm) {
      switch (status) {
        case 1:
          courseData[index].status = 0;
          break;
        case 0:
          courseData[index].status = 1;
          break;
        default:
          break;
      }

      setCourseData([...courseData]);

      const result = await commonService.changeStatus({
        id: cid,
        status: courseData[index].status,
        field: 'COURSE'
      });

      const errorCode = result.error_code;

      if (errorCode !== 0) {
        const st = courseData[index].status;
        alert(
          st ? '该课程上架失败' : '该课程下架失败'
        )
      }
    }
  }

  async function handleSelectChange(data, cid, index) {
    courseData[index].field = data.id;
    courseData[index].fieldTitle = data.title;
    setCourseData([...courseData]);

    const result = await courseService.changeCourseField({
      cid,
      field: data.id
    });

    const errorCode = result.error_code;

    if (errorCode !== 0) {
      alert('修改课程分类失败');
      return;
    }
  }

  useEffect(() => {
    getCourseData();
  }, []);
  return (
    <div className="list-container">
      <ListTitle
        title={title}
        hanldeRefreshDataClick={hanldeRefreshDataClick}
      />
      <table className="list-table">
        <TableHead
          thData={COURSE_TH}
        />
        <TableBody
          courseData={courseData}
          fieldData={fieldData}
          handleSelectChange={handleSelectChange}
          handleStatusClick={handleStatusClick}
        />
      </table>
    </div>
  )
}
