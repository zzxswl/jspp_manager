import TableSelect from 'components/Common/TableSelect';

import './index.scss';

export default function TableBody(props) {
  const { courseData, fieldData, handleSelectChange, handleStatusClick } = props;

  return (
    <tbody>
      {
        courseData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.cid}</td>
              <td>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <img className="course-img" src={`http://tximg.zcjsstudy.com/${item.posterKey}`} alt={item.courseName} />
                </a>
              </td>
              <td className="course-name">
                <a href={item.href} target="_blank" rel="noopener noreferrer">{item.courseName}</a>
              </td>
              <td>
                <span className={item.price === '免费' ? 'free' : 'price'}>
                  {item.price === '免费' ? '免费' : `￥${item.price}`}
                </span>
              </td>
              <td>{item.studentCount}</td>
              <td>
              <TableSelect 
                fieldData={fieldData}
                selectIdx={index}
                defaultValue={item.fieldTitle}
                handleSelectChange={handleSelectChange}
                cid={item.cid}
              />
              </td>
              <td>
                <button
                  className={['btn', item.status ? 'btn-danger' : 'btn-success'].join(' ')}
                  onClick={() => handleStatusClick(item.cid, index)}          
                >
                  { item.status ? '下架' : '上架'}
                </button>
              </td>
            </tr>
          )
        })
      }
    </tbody>
  );
}