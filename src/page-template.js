
const genEmployee = employeeArry => {
    if(!employeeArry){
        return console.log('Error no data');
    }
   
    return `
      ${employeeArry
        .map(({ name, role, id, email, github, school, office}) => {
          let variable=""
          if(school) {
            variable = `<li class='list-group-item border'>School: ${school}</li>`
          } else if(github) {
            variable = `<li class='list-group-item border'>Github: <a href="http://www.github.com/${github}">${github}</a></li>`
          }else if(office){
            variable = `<li class ='listgroup-item border'>Office: ${office}</li>`
          }
          let roleVar=""
          if (role === "Engineer"){
            roleVar = `<span class="card-text"><i class="fas fa-glasses"></i>${role}</span>`
          }else if (role === "Intern"){
            roleVar = `<span class="card-text"><i class="fas fa-user-graduate"></i>${role}</span>`
          }else if (role === "Manager"){
            roleVar = `<span class="card-text"><i class="fas fa-user-tie"></i>${role}</span>`
          }


      return `
          <div class="card" style="width: 18rem;">
            <div class="card-header">
              <h5 class="card-title">${name}</h5>
              ${roleVar}
            </div>
            <ul class="flex-column list-group list-unstyled">
              <li class="list-group-item border">Id: ${id}</li>
              <li class="list-group-item border">Email:<a href="#" class="card-link">${email}</a></li>
              ${variable}
  
            </ul>
          </div>
          `;
        })
        .join('')}
      `;
    };
        
  
  // export function to generate entire page
  module.exports = templateData => {
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
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
          ${genEmployee(templateData)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2020 by AdamR-Work</h3>
      </footer>
    </body>
    </html>
    `;
  };
  