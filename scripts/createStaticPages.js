const { NodeService } = require('../dist/api/index');
const fs = require('fs-extra')
const path = require('path')

// TODO: move this to Typescript
// TODO: Make the base url an option on the command
const baseUrl = 'https://will.dev.kunstmaan.be/app_dev.php';
const nodeService = new NodeService({ baseUrl });

function removeDuplicates(items) {
  const uniqueItems = [];
  for (let i = 0; i < items.length; i++) {
    if (uniqueItems.indexOf(items[i]) === -1) {
      uniqueItems.push(items[i]);
    }
  }
  return uniqueItems;
}

function getNodeTypes(node) {
  const nodeTypes = [node.ref_entity_name];
  if (node.parent) {
    nodeTypes.push(...getNodeTypes(node.parent));
  }

  return removeDuplicates(nodeTypes);
}

async function generatePages() {
  const nodes = await nodeService.getNodes();
  const nodeTypes = [];
  nodes.forEach(node => {
    nodeTypes.push(...getNodeTypes(node));
  });
  const uniqueNodeTypes = removeDuplicates(nodeTypes);

  // TODO: make this target path an input option
  const pageBasePath = path.join(__dirname, '../will-static-site/src/pages');
  uniqueNodeTypes.forEach(nodeType => {
    const normalizedPageName = nodeType.replace(/\\/g, '');
    const pagePath = path.resolve(pageBasePath, `${normalizedPageName}.ts`);
    // TODO: don't use sync
    fs.ensureFileSync(pagePath);
    fs.writeFileSync(pagePath, `import React from 'react'
import { withSiteData } from 'react-static'

export default withSiteData((page: Definitions.IApiPage) => (
    <div>
        {'${normalizedPageName}'}
    </div>
))`);
  });
}

generatePages()
  .then(() => console.log('Generating pages finished'))
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
