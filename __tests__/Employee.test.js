const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe('Data', () => {
        it('should return an object with data including role, name, id, and email when called with the \'new\' keyword', () => {
            const obj = new Employee('Manager', 'Dan', 1, 'dan@email.com');

            expect('role' in obj && 'name' in obj && 'id' in obj && 'email' in obj).toEqual(true);
        })
        it('should return a role as a string called \'Manager\' or \'Engineer\' or \'Intern\'', () => {
            const obj = new Employee('Manager', 'Dan', 1, 'dan@email.com');

            expect(obj.role).toEqual('Manager' || 'Engineer' || 'Intern');
        })
        it('should return a name as a string', () => {
            const obj = new Employee('Manager', 'Dan', 1, 'dan@email.com');
          
            expect(typeof obj.name).toBe('string');
        })
        it('should return an id as a number', () => {
            const obj = new Employee('Manager', 'Dan', 1, 'dan@email.com');
            
            expect(typeof obj.id).toBe('number');
        })
        it('should return an email as a string', () => {
            const obj = new Employee('Manager', 'Dan', 1, 'dan@email.com');

            expect(typeof obj.email).toBe('string');
        })
    })
    describe('Methods', () => {
        describe('getRole', () => {
            it('should return the role of employee', () => {
                const obj = new Employee('Manager', 'Dan', 1, 'dan@email.com');
                
                expect(obj.getRole()).toEqual('Manager');
            })
        })
        describe('getName', () => {
            it('should return the name of employee', () => {
                const obj = new Employee('Manager', 'Dan', 1, 'dan@email.com');

                expect(obj.getName()).toEqual('Dan');
            })
        })
        describe('getId', () => {
            it('should return the id of employee', () => {
                const obj = new Employee('Manager', 'Dan', 1, 'dan@email.com');
                
                expect(obj.getId()).toEqual(1);
            })
        })
        describe('getEmail', () => {
            it('should return the email of employee', () => {
                const obj = new Employee('Manager', 'Dan', 1, 'dan@email.com');

                expect(obj.getEmail()).toEqual('dan@email.com');
            })
        })
    })
});
