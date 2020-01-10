/**
 * client state model
 */
import {LoadableEntityStateModel} from '../../../shared/base/state/loadable-entity.model';

export class HeroesStateModel extends LoadableEntityStateModel {
    heroesMap: Map<string, Hero>;
    search: string;
}

/**
 * interface for client item
 */
export interface Hero {
    id: string;
    name: string;
    img?: string;
    description?: string;
}
