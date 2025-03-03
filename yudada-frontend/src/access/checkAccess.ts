import ACCESS_ENUM from "@/access/accessEnum";

/**
 * 检查权限（判断当前登录用户是否具有某个权限）
 * @param loginUser 当前登录用户
 * @param needAccess 需要有的权限
 * @return boolean 有无权限
 */
const checkAccess = (
  loginUser: API.LoginUserVO,
  needAccess = ACCESS_ENUM.NOT_LOGIN
) => {
  // 获取当前登录用户具有的权限（如果没有 loginUser，则表示未登录）
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  // 1. loginUser?.userRole
  // 可选链操作符 ?. 安全访问对象的属性，
  // 避免因对象为 null 或 undefined 而报错。
  // 含义： 如果 loginUser 存在（即用户已登录），
  // 则取 loginUser.userRole；
  // 如果 loginUser 不存在（即用户未登录），则返回 undefined。
  //2. ?? ACCESS_ENUM.NOT_LOGIN
  // 空值合并运算符 ?? 当左侧的值为 null 或 undefined 时，
  // 返回右侧的默认值。
  // 含义： 如果 loginUser.userRole 不存在（例如用户未登录），
  // 则使用默认值 ACCESS_ENUM.NOT_LOGIN（表示未登录状态）。
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  // 如果用户要登录才能访问
  if (needAccess === ACCESS_ENUM.USER) {
    // 如果用户没登录，那么表示无权限
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }
  // 如果管理员才能访问
  if (needAccess === ACCESS_ENUM.ADMIN) {
    // 如果不是管理员，表示无权限
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;
