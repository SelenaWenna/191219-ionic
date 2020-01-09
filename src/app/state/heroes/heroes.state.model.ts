/**
 * client state model
 */
import {LoadableEntityStateModel} from '../../../shared/base/state/loadable-entity.model';

export class HeroesStateModel extends LoadableEntityStateModel {
    heroesMap: Map<number, Hero>;
    search: string;
}

/**
 * interface for client item
 */
export interface Hero {
    id: number;
    name: string;
    img?: string;
    description?: string;
}
