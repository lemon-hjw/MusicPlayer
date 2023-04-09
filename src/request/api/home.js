import service from "..";
// 获取首页轮播图的数据
export function getBanner() {
  return service({
    method: "get",
    url: "/banner?type=2",
  });
}
export function getMusicList() {
  return service({
    method: "get",
    url: "/personalized?limit=20",
  });
}
export function getSearchMusic(data) {
  return service({
    method: "get",
    url: `/cloudsearch?keywords=${data}`,
  });
}
export function getPhoneLogin(data) {
  return service({
    method: "get",
    url: `/login/cellphone?phone=${data.phone}&password=${data.password}`,
  });
}
// export function getLoginUser(data) {
//   return service({
//     method: "get",
//     url: "/register/anonimous",
//   });
// }
