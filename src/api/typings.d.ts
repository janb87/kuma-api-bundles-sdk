declare namespace Definitions {
    export interface IApiContext {
        name?: string;
        pageparts?: {
            type?: string;
            data?: {
            };
        }[];
    }
    export interface IApiEntity {
        /**
         * example:
         * Kunstmaan\SomeBundle\Entity\Pages\HomePage
         */
        type?: string;
        data?: {
        };
    }
    export interface IApiPage {
        page?: {
            /**
             * example:
             * Kunstmaan\SomeBundle\Entity\Pages\HomePage
             */
            type?: string;
            data?: {
            };
        };
        pageTemplate?: {
            name?: string;
            contexts?: {
                name?: string;
                pageparts?: {
                    type?: string;
                    data?: {
                    };
                }[];
            }[];
        };
        node?: {
            id?: number;
            hidden_from_nav?: boolean;
            ref_entity_name?: string;
            internal_name?: string;
            parent?: {
                id?: number;
                hidden_from_nav?: boolean;
                ref_entity_name?: string;
                internal_name?: string;
            };
        };
        nodeTranslation?: {
            title?: string;
            lang?: string;
            online?: boolean;
        };
    }
    export interface IApiPagePart {
        type?: string;
        data?: {
        };
    }
    export interface IApiPageTemplate {
        name?: string;
        contexts?: {
            name?: string;
            pageparts?: {
                type?: string;
                data?: {
                };
            }[];
        }[];
    }
    export interface IDeprecateKeyword {
        /**
         * example:
         * keyword
         */
        keyword?: string;
    }
    export interface IDisablingDate {
        /**
         * example:
         * 2048-05-12
         */
        date?: string;
    }
    export interface IErrorModel {
        /**
         * example:
         * 404
         */
        code?: number; // int32
        /**
         * example:
         * Not found
         */
        message?: string;
        extraData?: any[];
    }
    export interface IGetApiPage {
        page?: {
            /**
             * example:
             * Kunstmaan\SomeBundle\Entity\Pages\HomePage
             */
            type?: string;
            data?: {
            };
        };
        pageTemplate?: {
            name?: string;
            contexts?: {
                name?: string;
                pageparts?: {
                    type?: string;
                    data?: {
                    };
                }[];
            }[];
        };
        node?: {
            id?: number;
            hidden_from_nav?: boolean;
            ref_entity_name?: string;
            internal_name?: string;
            parent?: {
                id?: number;
                hidden_from_nav?: boolean;
                ref_entity_name?: string;
                internal_name?: string;
            };
        };
        nodeTranslation?: {
            title?: string;
            lang?: string;
            online?: boolean;
        };
    }
    export interface IGetNode {
        id?: number;
        hidden_from_nav?: boolean;
        ref_entity_name?: string;
        internal_name?: string;
        parent?: {
            id?: number;
            hidden_from_nav?: boolean;
            ref_entity_name?: string;
            internal_name?: string;
        };
    }
    export interface IKeywordCollection {
        /**
         * example:
         * keyword
         */
        keyword?: string;
    }
    export type IListTranslation = {
        keyword?: string;
        text?: string;
    }[];
    export interface INode {
        id?: number;
        hidden_from_nav?: boolean;
        ref_entity_name?: string;
        internal_name?: string;
    }
    export type INodeList = {
        id?: number;
        hidden_from_nav?: boolean;
        ref_entity_name?: string;
        internal_name?: string;
        parent?: {
            id?: number;
            hidden_from_nav?: boolean;
            ref_entity_name?: string;
            internal_name?: string;
        };
    }[];
    export interface INodeTranslation {
        title?: string;
        lang?: string;
        online?: boolean;
    }
    export interface INodeVersion {
        id?: number;
        owner?: string;
        ref_id?: number;
        ref_entity_name?: string;
    }
    export interface IPostApiPage {
        page?: {
            /**
             * example:
             * Kunstmaan\SomeBundle\Entity\Pages\HomePage
             */
            type?: string;
            data?: {
            };
        };
        pageTemplate?: {
            name?: string;
            contexts?: {
                name?: string;
                pageparts?: {
                    type?: string;
                    data?: {
                    };
                }[];
            }[];
        };
        node?: {
            id?: number;
            hidden_from_nav?: boolean;
            ref_entity_name?: string;
            internal_name?: string;
            parent?: {
                id?: number;
                hidden_from_nav?: boolean;
                ref_entity_name?: string;
                internal_name?: string;
            };
        };
        nodeTranslation?: {
            title?: string;
            lang?: string;
            online?: boolean;
        };
    }
    export interface IPostNode {
        id?: number;
        hidden_from_nav?: boolean;
        ref_entity_name?: string;
        internal_name?: string;
        parent?: {
            id?: number;
            hidden_from_nav?: boolean;
            ref_entity_name?: string;
            internal_name?: string;
        };
    }
    export interface IPostNodeTranslation {
        title?: string;
        lang?: string;
        online?: boolean;
    }
    export interface IPostTranslation {
        keyword?: string;
        text?: string;
        locale?: string;
        /**
         * example:
         * messages
         */
        domain?: string;
    }
    export type IPostTranslations = {
        keyword?: string;
        text?: string;
        locale?: string;
        /**
         * example:
         * messages
         */
        domain?: string;
    }[];
    export interface IPutApiPage {
        page?: {
            /**
             * example:
             * Kunstmaan\SomeBundle\Entity\Pages\HomePage
             */
            type?: string;
            data?: {
            };
        };
        pageTemplate?: {
            name?: string;
            contexts?: {
                name?: string;
                pageparts?: {
                    type?: string;
                    data?: {
                    };
                }[];
            }[];
        };
        node?: {
            id?: number;
            hidden_from_nav?: boolean;
            ref_entity_name?: string;
            internal_name?: string;
            parent?: {
                id?: number;
                hidden_from_nav?: boolean;
                ref_entity_name?: string;
                internal_name?: string;
            };
        };
        nodeTranslation?: {
            title?: string;
            lang?: string;
            online?: boolean;
        };
    }
    export interface IPutTranslation {
        keyword?: string;
        text?: string;
        locale?: string;
        /**
         * example:
         * messages
         */
        domain?: string;
    }
    export interface ISingleTranslation {
        keyword?: string;
        text?: string;
    }
}
