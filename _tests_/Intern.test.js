
const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('janet','7','janet@gmail.com','cal-tech');

    expect(intern.name).toBe('janet');
    expect(intern.employId).toBe('7');
    expect(intern.email).toBe('janet@gmail.com');
    expect(intern.school).toBe('cal-tech');
});