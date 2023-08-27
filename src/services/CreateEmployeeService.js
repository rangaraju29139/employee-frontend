import axios from "axios";
const EMPLOYEE_API_BASE_URL = "http://localhost:9000/api/v1/create-employee";

class CreateEmployeeService {
  createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }

  updateEmployee(employeeId) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + employeeId);
  }
}
export default new CreateEmployeeService();
