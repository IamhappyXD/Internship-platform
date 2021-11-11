import http from "../http-common";

const getAll = () => {
  return http.get("/company");
};
export default {
    getAll };