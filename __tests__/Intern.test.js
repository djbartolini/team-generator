const Intern = require("../lib/Intern");

describe('Intern', () => {
    describe('Data', () => {
        it('should return an object with data for role, name, id, and email when called with the \'new\' keyword', () => {
            const obj = new Intern('Intern', 'Dan', 1, 'dan@email.com', 'danschool');

            expect('role' in obj && 'name' in obj && 'id' in obj && 'email' in obj).toEqual(true);
        })
    })
    describe('Methods', () => {
        it('should return the github username of the employee', () => {
            const obj = new Intern('Intern', 'Dan', 1, 'dan@email.com', 'danschool');

            expect(obj.getSchool()).toEqual('danschool');
        })
    })
});
