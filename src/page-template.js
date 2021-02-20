
const genEmployee = employeeArry => {
    if(!employeeArry){
        return '';
    }
    // Manager
    return `
    <div>
    ${employeeArry
        // .filter(({role}) => role)
        .map(({ name, role, id, github, email, phone}) => {
      return `
          <div class="card" style="width: 18rem;">
            <div class="card-header">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${role}</p>
            </div>
            <ul class="flex-column list-group list-unstyled">
              <li class="list-group-item border">Id: ${id}</li>
              <li class="list-group-item border">Email:<a href="#" class="card-link">${email}</a></li>
              <li class="list-group-item border">Github: ${github}</li>
              <li class="list-group-item border">School: ${phone}</li>
            </ul>
          </div>
          `;
        })
        .join('')}

        </div>
      `;
    };
        
  
  // export function to generate entire page
  module.exports = templateData => {
    // destructure page data by section
    const {employeeArry} = templateData;
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
     
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-column justify-space-around align-center bg-danger py-3">
          <h1 class="page-title text-light  py-2 px-3">My Team</h1>
        </div>
      </header>
      <main class="container flex-row justify-space-around my-5">
          <!-- insert generated cards  -->
          ${genEmployee(employeeArry)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2020 by AdamR-Work</h3>
      </footer>
    </body>
    </html>
    `;
  };
  