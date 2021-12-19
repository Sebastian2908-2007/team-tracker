const fs = require('fs');
const { resolve } = require('path');

const writeTeam = teamData => {
    return new Promise((resolve,reject) => {
     fs.writeFile('./dist/team.html',teamData,err => {
       if(err) {
           reject(err);
           return;
       }

       resolve({
           ok: true,
           message: 'Team generated!'
        });
      });
    });
};

const copyCss = () => {
    return new Promise((resolve,reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
            }
            resolve({
                ok: true,
                message: 'Stylesheet copied to dist directory!'
            });
        });
    });
};

module.exports = {writeTeam, copyCss};