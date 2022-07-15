const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  hospital: state => state.user.hospital,
  hospitalId: state => state.user.hospitalId,
  username: state => state.user.username,
  introduction: state => state.user.introduction,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
  submitStatus: state => state.sys.submitStatus,
  menuList: state => state.user.menuList,
  menus: state => state.user.menus,
  permissions: state => state.user.permissions
}
export default getters
