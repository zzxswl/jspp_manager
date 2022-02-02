import './index.scss';

export default function TableBody(props) {
  const { collectionData, handleStatusClick } = props;

  return (
    <tbody>
      {
        collectionData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>
                <a href={item.qqQunLink} target="_blank" rel="noopener noreferrer">
                  <img className="collection-img" src={`http://tximg.zcjsstudy.com/${item.posterKey}`} alt={item.title} />
                </a>
              </td>
              <td className="course-name">
                <a href={item.qqQunLink} target="_blank" rel="noopener noreferrer">{item.title}</a>
              </td>
              <td>{item.info}</td>
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