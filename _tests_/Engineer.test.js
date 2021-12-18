const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('gavin','10','gavin@gmail.com','gav3680')

    expect(engineer.name).toBe('gavin');
    expect(engineer.employId).toBe('10');
    expect(engineer.email).toBe('gavin@gmail.com');
    expect(engineer.gitHub).toBe('gav3680');
})