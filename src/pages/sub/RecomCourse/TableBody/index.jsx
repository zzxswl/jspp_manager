
import './index.scss';

export default function TableBody(props) {
  const { recomCourseData, handleStatusClick } = props;

  return (
    <tbody>
      {
        recomCourseData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.cid}</td>
              <td>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <img className="recom-course-img" src={`http://tximg.zcjsstudy.com/${item.posterKey}`} alt={item.title} />
                </a>
              </td>
              <td className="course-name">
                <a href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</a>
              </td>
              <td>{item.teacherName}</td>
              <td>
                <span className={item.price === '免费' ? 'free' : 'price'}>
                  {item.price === '免费' ? '免费' : `￥${item.price}`}
                </span>
              </td>
              <td>{item.studentCount}</td>
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