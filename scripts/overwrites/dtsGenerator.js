const utils = require('dtsgenerator/dist/core/utils');

// Extend the parser with mappings of specific types
// This is kinda dirty but seems to be the only way right now :)
// Altough we could say we can challenge the types we use inside our swagger docs
const origToTsType = utils.toTSType;
utils.toTSType = function(type, debugSource) {
  switch (type) {
    case 'id':
      return 'string';
    case 'datetime':
      return 'string';
    default:
      return origToTsType(type, debugSource);
  }
};

const dtsGenerator = require('dtsgenerator');

module.exports = dtsGenerator