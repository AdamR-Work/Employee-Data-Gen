
  // create the projects section
  const generateProjects = projectsArr => {
    return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
        <div class="flex-row justify-space-between">
        ${projectsArr
          .filter(({ feature }) => feature)
          .map(({ name, description, languages, link }) => {
            return `
            <div class="col-12 mb-2 bg-dark text-light p-3">
              <h3 class="portfolio-item-title text-light">${name}</h3>
              <h5 class="portfolio-languages">
                Built With:
                ${languages.map(language => language).join(',')}
              </h5>
              <p>${description}</p>
              <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
            </div>
          `;
          })
          .join('')}
  
        ${projectsArr
          .filter(({ feature }) => !feature)
          .map(({ name, description, languages, link }) => {
            console.log(languages);
            return `
            <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
              <h3 class="portfolio-item-title text-light">${name}</h3>
              <h5 class="portfolio-languages">
                Built With:
                ${languages.join(', ')}
              </h5>
              <p>${description}</p>
              <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
            </div>
          `;
          })
          .join('')}
      
        </div>
      </section>
    `;
  };
const genIntern = employeeArry =>{
    
  return`
  <div class="card" style="width: 18rem;">
            <div class="card-header">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">Manager</p>
            </div>
            <ul class="flex-column list-group list-unstyled">
              <li class="list-group-item border">Id: ${id}</li>
              <li class="list-group-item border">Email:<a href="#" class="card-link">${email}</a></li>
              <li class="list-group-item border">School: ${school}</li>
            </ul>
          </div>
          `;
        }
        
  
  // export function to generate entire page
  module.exports = templateData => {
    // destructure page data by section
    const {BuilditArry} = templateData;
  
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
         
          ${generateProjects(projects)}
       
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2020 by AdamR-Work</h3>
      </footer>
    </body>
    </html>
    `;
  };
  