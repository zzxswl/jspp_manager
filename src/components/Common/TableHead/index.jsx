import './index.scss';

export default function TableHead(props) {
  const { thData } = props;

  return (
    <thead>
      <tr>
        {
          thData.map((item, index) => {
            return (
              <th key={index}>{item}</th>
            );
          })
        }
      </tr>
    </thead>
  );
}