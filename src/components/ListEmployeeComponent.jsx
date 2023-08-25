import React, { Component } from "react";
import ListEmployeeService from "../services/ListEmployeeService";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }
  componentDidMount() {
    ListEmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employee list</h2>
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
