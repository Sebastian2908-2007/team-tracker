const generateManager = managerArr => {
  return `
  ${managerArr
    .map(({name,employId,email,officeNumber}) => {
      return `
      <div>${name}</div>
      <div>${employId}</div>
      <div>${email}</div>
      <div>${officeNumber}</div>
      `;
    })
  }`;
}

const generateEngineers = engineerArr => {
  return`
  ${engineerArr
  .map(({name,employId,email,gitHub}) => {
    return `
    <div>${name}</div>
    <div>${employId}</div>
    <div>${email}</div>
    <div>${gitHub}</div>
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
   <div>${name}</div>
   <div>${employId}</div>
   <div>${email}</div>
   <div>${school}</div>
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
   ${console.log(generateManager(managerArr))}
   ${console.log(generateEngineers(engineerArr))}
   ${console.log(generateInterns(internArr))}
      </main>
     </body>
    </html>`;
};
