const Engineer = require("../lib/Engineer")

test("Checks the classes gained from Employee Object is in Engineer Object", () => {
    const engineer = new Engineer('Burt','213', 'BurtLancaster@gmail.com', 'BurtLandGithHub','Engineer' );
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.role).toMatch("Engineer");
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toMatch(/@/);
});

test("Checks to see if Engineer has class that returns github info", () => {
    const engineer = new Engineer('Burt','213', 'BurtLancaster@gmail.com', 'BurtLand','Engineer' );
    expect(engineer.github).toEqual(expect.any(String));
});

test("Checks to see if Engineer has class that returns their role", () => {
    const engineer = new Engineer('Burt','213', 'BurtLancaster@gmail.com', 'BurtLand','Engineer' );
    expect(engineer.role).toMatch("Engineer");
});