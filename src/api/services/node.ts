interface IConfig {
    baseUrl: string
}

export default class NodeService {
    private config: IConfig

    constructor({baseUrl: string}) {

    }

    public async getNodes() {
        const {baseUrl} = this.config
        return await fetch(`${baseUrl}/api/nodes`)
    }

    public async getNode(nodeId: string) {
        const {baseUrl} = this.config
        return await fetch(`${baseUrl}/api/nodes/${encodeURIComponent(nodeId)}`)
    }
}
