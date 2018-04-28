import { NodeService } from './index';

const baseUrl = 'https://will.dev.kunstmaan.be/app_dev.php';

test('Can get all nodes', async () => {
  const nodeService = new NodeService({ baseUrl });
  expect(nodeService).toBeDefined();
  const nodes = await nodeService.getNodes();
  expect(nodes.length).toBeGreaterThan(10);
});

test('Can get a specific node', async () => {
  const nodeService = new NodeService({ baseUrl });
  expect(nodeService).toBeDefined();
  const node = await nodeService.getNode('1');
  expect(node.id).toBe(1);
});