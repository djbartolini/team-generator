const Manager = require("../lib/Manager");

describe('Manager', () => {
    describe('Data', () => {
        it('should return an object with data for name, id, email, and office when called with the \'new\' keyword', () => {
            const obj = new Manager('Dan', 1, 'dan@email.com', 123);

            expect('name' in obj && 'id' in obj && 'email' in obj && 'office' in obj).toEqual(true);
        })
    })
    describe('Methods', () => {
        describe('getRole', () => {
            it('should return manager', () => {
                const obj = new Manager();

                expect(obj.getRole()).toEqual('Manager');
            })
        })
    })
});

