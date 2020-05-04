import { EssentialsUtils } from '@essentials/utils';

export class List
{
    id: string;
    name: string;
    idCards: string[];

    /**
     * Constructor
     *
     * @param list
     */
    constructor(list)
    {
        this.id = list.id || EssentialsUtils.generateGUID();
        this.name = list.name || '';
        this.idCards = [];
    }
}
