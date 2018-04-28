import axios from 'axios';

interface IConfig {
  baseUrl: string;
}

// TODO: hateoas support
interface IGetNodesResponse {
  _embedded: { items: Definitions.INodeList };
}

export default class NodeService {
  private config: IConfig;

  constructor(config: IConfig) {
    this.config = config;
  }

  public async getNodes(): Promise<Definitions.INodeList> {
    try {
      const { baseUrl } = this.config;
      const response = await axios.get<IGetNodesResponse>(
        `${baseUrl}/api/nodes`
      );

      return response.data._embedded.items;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  public async getNode(nodeId: string): Promise<Definitions.IGetNode> {
    try {
      const { baseUrl } = this.config;
      const response = await axios.get<Definitions.IGetNode>(
        `${baseUrl}/api/nodes/${encodeURIComponent(nodeId)}`
      );
      return response.data
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
