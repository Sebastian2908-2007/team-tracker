const generateManager = managerArr => {
  return `
  ${managerArr
    .map(({name,employId,email,officeNumber}) => {
      return `
      <pre>
      <strong>
      Manager: ${name}
      </strong>
      
      <strong>
      Employee Id: ${employId}
      </strong>
      
      <strong>
      Contact:  <a class="email-link" href="mailto:${email}">${name}</a>
      </strong>
  
      <strong>
      Office#: ${officeNumber}
      </strong>
      
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
    <strong>
    Engineer: ${name}
    </strong>
    
    <strong>
    Employee Id: ${employId}
    </strong>
    
    <strong>
    Contact:  <a class="email-link" href="mailto:${email}">${name}</a>
    </strong>
  
    <strong>
    Github Acct: <a href="https://github.com/${gitHub}" target="blank" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View</a>
    </strong>

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
   <strong>
   Intern: ${name}
   </strong>
   
   <strong>
   Employee Id: ${employId}
   </strong>
   
   <strong>
   Contact: <a class="email-link" href="mailto:${email}">${name}</a>
   </strong>
   
   <strong>
   School: ${school}
   </strong>
   
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
      <div class="manager">
   ${generateManager(managerArr)}
      </div>

      <div class="engineer">
   ${generateEngineers(engineerArr)}
      </div>

      <div class="intern">
   ${generateInterns(internArr)} 
      </div>
      </section>
      </main>
     </body>
    </html>`;
};
