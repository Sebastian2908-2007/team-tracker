const generateManager = managerArr => {
  return `
  ${managerArr
    .map(({name,employId,email,officeNumber}) => {
      return `
      <pre>
      Manager:${name}

      Employee Id:${employId}

      email:${email}

      Office#:${officeNumber}
      </pre>
      `;
    })
  }`;
}

const generateEngineers = engineerArr => {
  return`
  ${engineerArr
  .map(({name,employId,email,gitHub}) => {
    return `
    <pre>
    Engineer:${name}

    Employee Id:${employId}

    email:${email}

    Github Acct:${gitHub}
    </pre>
    `;
  })
  }
  `;
}

const generateInterns = internArr => {
  return`
  ${internArr
 .map(({name,employId,email,school}) => {
   return `
   <pre>
   Intern:${name}

   Employee Id${employId}

   email:${email}
   
   School:${school}
   </pre>
   `;
 })
  }
  `;
}



module.exports = (managerArr,engineerArr,internArr) => {
    return` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
     <body>
      <main> 
      <section class="main-section">
      <div class="employee-section">
   ${generateManager(managerArr)}
      </div>

      <div class="employee-section">
   ${generateEngineers(engineerArr)}
      </div>

      <div class="employee-section">
   ${generateInterns(internArr)} 
      </div>
      </section>
      </main>
     </body>
    </html>`;
};
