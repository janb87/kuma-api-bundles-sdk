const sw2dts = require('sw2dts');
var utils = require('dtsgenerator/dist/core/utils');
const origToTsType = utils.toTSType;
utils.toTSType = function(type, debugSource) {
  switch (type) {
    case 'id':
      return 'string';
    case 'datetime':
      return 'Date';
    default:
      return origToTsType(type, debugSource);
  }
};

const dtsGenerator = require('dtsgenerator');
require('isomorphic-fetch');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

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

      const result = await dtsGenerator.default({
        contents: [content],
        typeNameConvertor
      });
      console.log(result);
    } catch (err) {
      return Promise.reject(err);
    }
  })
  .catch(function(error) {
    console.log(error);
    process.exit(1);
  });
