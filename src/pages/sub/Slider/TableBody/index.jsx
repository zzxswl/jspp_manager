import './index.scss';

export default function TableBody(props) {
  const { sliderData, handleStatusClick } = props;

  return (
    <tbody>
      {
        sliderData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.cid}</td>
              <td>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <img className="slider-img" src={`http://tximg.zcjsstudy.com/${item.imgKey}`} alt={item.title} />
                </a>
              </td>
              <td className="course-name">
                <a href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</a>
              </td>
              <td>
                <button
                  className={['btn', item.status ? 'btn-danger' : 'btn-success'].join(' ')}
                  onClick={() => handleStatusClick(item.id, index)}          
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