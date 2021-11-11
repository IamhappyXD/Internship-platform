import {baseURL, headers} from "../http-common";

class CompanyDataService {
  getAll() {
    return baseURL.get("/company");
  }

}

export default new CompanyDataService();
