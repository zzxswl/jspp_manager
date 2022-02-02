import './index.scss';

export default function ListTitle(props) {
  const { title, refreshHide, hanldeRefreshDataClick } = props;
  return (
    <div className="list-title">
      <h1 className="title">{title}</h1>
      <span
        className={["refresh-btn", refreshHide ? 'hide' : ''].join(' ')}
        onClick={ () => hanldeRefreshDataClick() }
      >
        <i className="iconfont icon-refresh">刷新数据</i>
      </span>
    </div>
  )
}