import './index.scss';

export default function TableBody(props) {
  const { studentData, handleStatusClick } = props;
  
  return (
    <tbody>
      {
        studentData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td className="img-td">
                <img className="student-img" src={`http://tximg.zcjsstudy.com/${item.studentImgKey}`} alt={item.studentName} />
              </td>
              <td>{item.studentName}</td>
              <td className="intro-td">{item.intro}</td>
              <td>
                <a
                  href={item.courseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >{item.courseName}
                </a>
              </td>
              <td>
                <button
                  className={['btn', item.status ? 'btn-danger' : 'btn-success'].join(' ')}
                  onClick={() => handleStatusClick(item.id, index)}
                >
                  {item.status ? '下线' : '上线'}
                </button>
              </td>
            </tr>
          )
        })
      }
    </tbody>
  );
}