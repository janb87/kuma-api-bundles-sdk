interface IConfig {
    baseUrl: string
}

export default class NodeService {
    private config: IConfig

    constructor(config: IConfig) {
        this.config = config
    }

    public async getNodes(): Promise<Definitions.INodeList> {
        try {
            const {baseUrl} = this.config
            const response = await fetch(`${baseUrl}/api/nodes`)
            const nodes = await response.json()
            return nodes as Definitions.INodeList
        } catch (err) {
            console.error(err)
            throw err
        }
    }

    public async getNode(nodeId: string): Promise<Definitions.IGetNode> {
        try {
            const {baseUrl} = this.config
            const response = await fetch(`${baseUrl}/api/nodes/${encodeURIComponent(nodeId)}`)
            const nodes = await response.json()
            return nodes as Definitions.IGetNode
        } catch (err) {
            console.error(err)
            throw err
        }
    }
}
