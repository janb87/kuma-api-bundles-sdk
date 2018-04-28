require('isomorphic-fetch');
const fs = require('fs-extra');
const dtsGenerator = require('../overwrites/dtsGenerator');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const DIST_PATH = './dist/typings.d.ts';

function typeNameConvertor(id) {
  const names = dtsGenerator.DefaultTypeNameConvertor(id);
  if (names.length > 0) {
    const lastIndex = names.length - 1;
    names[lastIndex] = 'I' + names[lastIndex];
  }
  return names;
}

const SWAGGER_URL = 'https://will.dev.kunstmaan.be/api/doc.json';
fetch(SWAGGER_URL)
  .then(async function(response) {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }

    try {
      const content = await response.json();

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
