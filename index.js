// Write your solution in this file!
const employee = {name:"X",
streetAddress:"gonna give it to ya"}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newObj = {...employee} 
    newObj[key] = value
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    let newObj2 = {...employee}
    delete newObj2[key]
    return newObj2
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}