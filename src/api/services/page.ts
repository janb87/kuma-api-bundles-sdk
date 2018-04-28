import axios from 'axios';

interface IConfig {
  baseUrl: string;
}

export default class PageService {
  private config: IConfig;

  constructor(config: IConfig) {
    this.config = config;
  }

  public async getPage(pageId: string, locale: string): Promise<Definitions.IApiPage> {
    try {
      const { baseUrl } = this.config;
      const response = await axios.get<Definitions.IApiPage>(
        `${baseUrl}/api/pages/${encodeURIComponent(pageId)}?locale=${encodeURIComponent(locale)}`
      );
      return response.data
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
