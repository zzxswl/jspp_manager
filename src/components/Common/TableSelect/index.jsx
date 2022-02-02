import { useState, useEffect } from 'react';

import './index.scss';

export default function TableSelect(props) {
  const [listShow, setListShow] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const { fieldData, selectIdx, defaultValue, cid } = props;

  function handleSelectChange(data, cid, index) {
    setListShow(false);
    setSelectValue(data.title);
    props.handleSelectChange(data, cid, index);
  }

  useEffect(() => {
    setSelectValue(defaultValue);
  }, [defaultValue]);

  return (
    <div className="table-select">
      <i className="iconfont icon-arrow-down"></i>
      <div
        className="value-show"
        onClick={() => setListShow(!listShow)}
      >{selectValue}</div>
      <ul className={['option-list', listShow ? 'show' : ''].join(' ')}>
        <li
          className="option-item"
          onClick={() => handleSelectChange({id: 0, title: '无分类'}, cid, selectIdx)}
        >无分类</li>
        {
          fieldData.map((item, index) => {
            return (
              <li
                className="option-item"
                key={index}
                onClick={() => handleSelectChange(item, cid, selectIdx)}
              >{item.title}</li>
            );
          })
        }
      </ul>
    </div>
  );
}