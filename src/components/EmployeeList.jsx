import React from 'react'
import EmployeesListItems from './EmployeeListItems'


function EmployeeList() {

  const employeeData = EmployeesListItems.map((employee) => (
    <div className='emp'>
      <h3>{employee.image}</h3>
      <h3>{employee.name}</h3>
      <h3>{employee.position}</h3>
    </div>
  ));

  return <div className='list'>{employeeData}</div>;
}

export default EmployeeList;
