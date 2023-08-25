# Employee frontend

## procedure following to build the react app

```
npx create-react-app employee-frontend
cd employee-frontend
npm start # to start the server
```

- Install the bootstrap
  ` npm install bootstrap --save`

- Import the boostrap into the index.js file

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
```

- create the components folder under the src folder

- create the ListEmployees Folder under the src folder.

[!NOTE] suggestion to checkout the ** react code snippets vs code plugin**

- to create the react code quickly
  - just by typing **rcc** to show the suggestion to create the react class code component.

## update the ListEmployeeComponent

```javascript
import React, { Component } from "react";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
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
```

## install the axios for making the api calls

` npm install axios`
