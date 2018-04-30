const axios = require('axios')
const fs = require('fs-extra');
const dtsGenerator = require('./overwrites/dtsGenerator');

const DIST_PATH = './src/api/typings.d.ts';

function typeNameConvertor(id) {
  const names = dtsGenerator.DefaultTypeNameConvertor(id);
  if (names.length > 0) {
    const lastIndex = names.length - 1;
    names[lastIndex] = 'I' + names[lastIndex];
  }
  return names;
}

const SWAGGER_URL = 'https://will.dev.kunstmaan.be/app_dev.php/api/doc.json';
axios.get(SWAGGER_URL)
  .then(async function(response) {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }

    try {
      const content = response.data

      const typings = await dtsGenerator.default({
        contents: [content],
        typeNameConvertor
      });
      fs.ensureFile(DIST_PATH, err => {
        if (err) {
          return Promise.reject(err);
        }
        fs.writeFile(DIST_PATH, typings, err => {
          if (err) {
            return Promise.reject(err);
          }
          console.log('Typings created')
        });
      });
    } catch (err) {
      return Promise.reject(err);
    }
  })
  .catch(function(error) {
    console.log(error);
    process.exit(1);
  });
