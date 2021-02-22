const Manager = require("../lib/Manager")


test("Checks the classes gained from Employee Object is in Manager Object", () => {
    const manager = new Manager('Howard','111', 'HowardtheDuck@Quackers.com', '4','Manager' );
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.role).toMatch("Manager");
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toMatch(/@/);
});

test("Checks to see if Manager has class that returns their office number", () => {
    const manager = new Manager('Howard','111', 'HowardtheDuck@Quackers.com', '4','Manager' );
    expect(manager.office).toEqual(expect.any(String));
});

test("Checks to see if Manager has class that returns their role", () => {
    const manager = new Manager('Howard','111', 'HowardtheDuck@Quackers.com', '4','Manager' );
    expect(manager.role).toMatch("Manager");
});