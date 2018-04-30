import { NodeService } from '../api/index';
// @ts-ignore
import fs from 'fs-extra';
// @ts-ignore
import path from 'path';

// TODO: Make the base url an option on the command
const baseUrl = 'https://will.dev.kunstmaan.be/app_dev.php';
const nodeService = new NodeService({ baseUrl });

function removeDuplicates(items: string[]) {
  const uniqueItems: string[] = [];
  for (let i = 0; i < items.length; i++) {
    if (uniqueItems.indexOf(items[i]) === -1) {
      uniqueItems.push(items[i]);
    }
  }
  return uniqueItems;
}

function getNodeTypes(node: Definitions.IGetNode): string[] {
  const nodeTypes = [node.ref_entity_name];
  if (node.parent) {
    nodeTypes.push(...getNodeTypes(node.parent));
  }

  return removeDuplicates(nodeTypes);
}

async function generatePages() {
  const nodes = await nodeService.getNodes();
  const nodeTypes: string[] = [];
  nodes.forEach(node => {
    nodeTypes.push(...getNodeTypes(node));
  });
  const uniqueNodeTypes = removeDuplicates(nodeTypes);

  // TODO: make this target path an input option
  // @ts-ignore
  const pageBasePath = path.join(__dirname, '../../will-static-site/pages');
  uniqueNodeTypes.forEach(nodeType => {
    const normalizedPageName = nodeType.replace(/\\/g, '');
    const pagePath = path.join(pageBasePath, normalizedPageName);
    // TODO: don't use sync
    fs.ensureFileSync(pagePath);
    fs.writeFileSync(pagePath, `${nodeType}`);
  });
}

generatePages()
  .then(() => console.log('Generating pages finished'))
  .catch(err => {
    console.log(err);
    // TODO: fix node.js references typescript
    // @ts-ignore
    process.exit(1);
  });
