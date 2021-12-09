// Write your solution in this file!
const employee = {
    streetAddress: '712 Bleeker',
    name: 'Kevin'
    }

function updateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    const newEmployee = {...employee}
    newEmployee[streetAddress] = '11 Broadway'
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    employee[streetAddress] = '12 Broadway'
    return employee
}

function deleteFromEmployeeByKey(employee,name) {
    const newEmployee = {...employee}
    delete newEmployee[name]
    return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee,name) {
    delete employee[name]
    return employee;
}