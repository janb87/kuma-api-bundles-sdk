import axios from 'axios';

interface IConfig {
  baseUrl: string;
}

// TODO: hateoas support
interface IGetNodesResponse {
  _embedded: { items: Definitions.INodeList };
}

interface IPagingParams {
  page: number
  limit: number
}

export default class NodeService {
  private config: IConfig;

  constructor(config: IConfig) {
    this.config = config;
  }

  public async getNodes({paging}: {paging: IPagingParams}): Promise<Definitions.INodeList> {
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

  public async getNode(nodeId: string, {paging}: {paging: IPagingParams}): Promise<Definitions.IGetNode> {
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
