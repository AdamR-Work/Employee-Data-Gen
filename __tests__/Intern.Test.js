const Intern = require("../lib/Intern")

test("Checks the classes gained from Employee Object is in Intern Object", () => {
    const intern = new Intern('Dorthy','441', 'DorthyDotty@gmail.com', 'DorthGithub','Intern' );
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.role).toMatch("Intern");
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toMatch(/@/);
});

test("Checks to see if Intern has class that returns their School name", () => {
    const intern = new Intern('Dorthy','441', 'DorthyDotty@gmail.com', 'DorthGithub','Intern' );
    expect(intern.school).toEqual(expect.any(String));
});

test("Checks to see if Intern has class that returns their role", () => {
    const intern = new Intern('Dorthy','441', 'DorthyDotty@gmail.com', 'DorthGithub','Intern' );
    expect(intern.role).toMatch("Intern");
});