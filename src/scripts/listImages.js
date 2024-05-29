const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, './assets/monster');
const outputFilePath = path.join(__dirname, './assets/cardPaths.json');

function listImagePaths() {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        return reject(err);
      }
      const imagePaths = files.map(file => `../assets/monster/${file}`);
      resolve(imagePaths);
    });
  });
}

listImagePaths()
  .then(paths => {
    fs.writeFileSync(outputFilePath, JSON.stringify(paths, null, 2));
    console.log(`Image paths have been saved to ${outputFilePath}`);
  })
  .catch(err => console.error(err));