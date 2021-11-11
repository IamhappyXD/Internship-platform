import http from "../http-common";

class CompanyDataService {
   getAll() {
    return http.get("/company");
  }

}

export default new CompanyDataService();
