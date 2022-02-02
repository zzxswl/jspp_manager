import './index.scss';

export default function TableBody(props) {
  const { crawlerData, handleCrawlClick } = props;

  return (
    <tbody>
      {
        crawlerData.map((item, index) => {
          return (
            <tr key={index}>
              <td className="desc-td">{item.description}</td>
              <td className="btn-td">
                <button 
                  className={['btn', item.loading ? 'btn-warning' : 'btn-success'].join(' ')}
                  disabled={ item.loading ? 'disabled' : ''}
                  onClick={() => handleCrawlClick(item.apiName, index)}
                >{item.loading ? '爬取中...' : item.title}</button>
              </td>
            </tr>
          )
        })
      }
    </tbody>
  );
}