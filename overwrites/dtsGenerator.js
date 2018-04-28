const utils = require('dtsgenerator/dist/core/utils');

// Extend the parser with mappings of specific types
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