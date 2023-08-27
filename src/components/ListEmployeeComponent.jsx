import React, { Component } from "react";
import ListEmployeeService from "../services/ListEmployeeService";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
    this.editEmployee = this.editEmployee.bind(this);
  }
  componentDidMount() {
    ListEmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }
  editEmployee(id) {
    window.location.replace("/update-employee/" + id);
  }

  addEmployee() {
    window.location.replace("/create-employee");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employee list</h2>
        <div className="row">
          <button
            className="btn btn-primary col-md-3"
            onClick={this.addEmployee}
          >
            Add Employee
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee FirstName</th>
                <th>Employee LastName</th>
                <th>Employee Email </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button
                      onClick={() => this.editEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
