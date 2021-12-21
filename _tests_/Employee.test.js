const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee('bob', '47', 'bob@gmail.com');

  expect(employee.name).toBe('bob');
  expect(employee.employId).toBe('47');
  expect(employee.email).toBe('bob@gmail.com');
});