const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('gibby','8','gibby@gmail.com','#47');

    expect(manager.name).toBe('gibby');
    expect(manager.employId).toBe('8');
    expect(manager.email).toBe('gibby@gmail.com');
    expect(manager.officeNumber).toBe('#47');
});