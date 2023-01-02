const generateManagerCard = (manager) => {
    const managerCard = (`<article>
    <h2>${manager.name}</h2>
    <h3>${manager.getRole()}</h3>
    <ul>
      <li>ID: ${manager.id}</li>
      <li>Email: ${manager.email}</li>
      <li>Office Number: ${manager.office}</li>
    </ul>
    </article>`)

    return managerCard;
};

const generateEngineerCard = (engineers) => {
    let engineerCards = ``;

    for(let engineer of engineers) {
        const engineerCard = `<article>
        <h2>${engineer.name}</h2>
        <h3>${engineer.role}</h3>
        <ul>
          <li>ID: ${engineer.id}</li>
          <li>Email: ${engineer.email}</li>
          <li>GitHub: <a href="#github">${engineer.github}</a></li>
        </ul>
      </article>`

      engineerCards += engineerCard;
    }
    return engineerCards;
};

const generateInternCard = (interns) => {
    let internCards = ``;

    for(let intern of interns) {
        const internCard = `<article>
        <h2>${intern.name}</h2>
        <h3>${intern.role}</h3>
        <ul>
          <li>ID: ${intern.id}</li>
          <li>Email: ${intern.email}</li>
          <li>School: ${intern.school}</li>
        </ul>
      </article>`

      internCards += internCard;
    }
    return internCards;
};

// export function to generate entire page
const generateHtml = (managerCard, engineerCards, internCards) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ENTER PAGE TITLE HERE</title>
    <!-- Minified version -->
    <style>
      @import "https://cdn.simplecss.org/simple.min.css";
  
      main {
        display: grid;
        grid-column: 1/-1;
        justify-items: center;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
        max-width: 1140px;
        margin: auto;
      }
  
      @media screen and (max-width: 1140px) {
        main {
          grid-template-columns: 1fr 1fr;
        }
      }
      @media screen and (max-width: 720px) {
        main {
          grid-template-columns: 1fr;
        }
      }
    </style>
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main>
      ${managerCard}
      ${engineerCards}
      ${internCards}
    </main>
    <footer>
      &copy; 2022-2023
    </footer>
  </body>
  </html>`
};

module.exports = { generateManagerCard, generateEngineerCard, generateInternCard, generateHtml };
