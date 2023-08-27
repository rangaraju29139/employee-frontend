import React, { Component } from "react";
import CreateEmployeeService from "../services/CreateEmployeeService";
import ListEmployeeService from "../services/ListEmployeeService";

class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    console.log("props:", props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
    this.cancelEmployee = this.cancelEmployee.bind(this);
  }
  componentDidMount() {
    const { id } = this.props.match.params.id;
    console.log("ID from URL:", id);

    ListEmployeeService.getEmployeeById(this.state.id).then((res) => {
      let employee = res.data;
      this.setState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
      });
    });
  }

  changeFirstNameHandler(event) {
    this.setState({ firstName: event.target.value });
  }
  changeLastNameHandler(event) {
    this.setState({ lastName: event.target.value });
  }
  changeEmailHandler(event) {
    this.setState({ email: event.target.value });
  }
  saveEmployee(event) {
    event.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };
    console.log("employee =>" + JSON.stringify(employee));

    CreateEmployeeService.updateEmployee(employee).then((res) => {
      window.location.replace("/employees/");
    });
  }
  cancelEmployee(event) {
    event.preventDefault();
    this.setState({ firstName: "", lastName: "", email: "" });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Employee</h3>
              <div className="card-body">
                <form action="">
                  <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input
                      type="text"
                      placeholder="Email"
                      name="emailName"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.saveEmployee}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancelEmployee}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateEmployeeComponent;
