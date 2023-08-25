import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:9000/api/v1/users";

class ListEmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }
}

export default new ListEmployeeService();
