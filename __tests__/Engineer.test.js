const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    describe('Data', () => {
        it('should return an object with data for name, id, email, and office when called with the \'new\' keyword', () => {
            const obj = new Engineer('Engineer', 'Dan', 1, 'dan@email.com', 'dangithub');

            expect('role' in obj && 'name' in obj && 'id' in obj && 'email' in obj).toEqual(true);
        })
    })
    describe('Methods', () => {
        describe('getGithub', () => {
            it('should return the github username of the employee', () => {
                const obj = new Engineer('Engineer', 'Dan', 1, 'dan@email.com', 'dangithub');

                expect(obj.getGithub()).toEqual('dangithub');
            });
        })
    })
});
