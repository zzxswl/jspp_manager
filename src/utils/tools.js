function trimSpace(str) {
  return str.replace(/\s+/g, '');
}

function getDatas(errorCode, data, navigate, callback) {
  if (errorCode === 0 && data) {
    callback();
  } else {
    navigate('/404');
  }
}

function confirmText(field) {
  return function (status) {
    switch (field) {
      case 'COLLECTION':
        return `确认要${status ? '下架' : '上架'}该集合吗？`;
      case 'COURSE':
        return `确认要${status ? '下架' : '上架'}该课程吗？`;
      case 'RECOM_COURSE':
        return `确认要${status ? '下架' : '上架'}该课程吗？`;
      case 'SLIDER':
        return `确认要${status ? '下架' : '上架'}该轮播图吗？`;
      case 'STUDENT':
        return `确认要${status ? '下线' : '上线'}该学生吗？`;
      case 'TEACHER':
        return `确认要${status ? '下线' : '上线'}该老师吗？`;
      case 'STAR_TEACHER':
        return `确认要设置该老师为${status ? '非明星老师' : '明星老师'}吗？`;
      default:
        return '无效操作';
    }
  }
}

export {
  trimSpace,
  getDatas,
  confirmText
}