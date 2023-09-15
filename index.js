let employee = { name: 'Sam' };

function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Create a new object with the original key-value pairs and the new one
  return Object.assign({}, employee, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // Modify the original object and return it
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  // Create a new object without the specified key
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  // Modify the original object by deleting the specified key
  delete employee[key];
  return employee;
}
