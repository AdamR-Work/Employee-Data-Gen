const Employee = require("../lib/Employee")

test("Checks to make sure the Employee has name class", () => {
    const employee = new Employee('Yoda', '28', 'Yoda@jeditemple.com','' );
    expect(employee.name).toEqual(expect.any(String));
});

test("Checks to make sure the Employee has an id class", () => {
    const employee = new Employee('Yoda', '28', 'Yoda@jeditemple.com','' );
    expect(employee.id).toEqual(expect.any(String));

});

test("Checks to make sure the Employee has and email class", () => {
    const employee = new Employee('Yoda', '28', 'Yoda@jeditemple.com','' );
    expect(employee.email).toMatch(/@/);
});
test("Checks to make sure the Employee passes a role class", () => {
    const employee = new Employee('Yoda', '28', 'Yoda@jeditemple.com','' );
    expect(employee.role).toMatch("");
});