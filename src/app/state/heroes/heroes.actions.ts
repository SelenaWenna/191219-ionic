/**
 * action for getting heroes list from backend
 */
import {Hero} from './heroes.state.model';

export class GetHeroesList {
    static readonly type = '[Heroes] Get List';
}

/**
 * action for set search string
 */
export class SetSearch {
    static readonly type = '[Heroes] Set search string';

    constructor(public payload: string) {
    }
}

/**
 * action for getting hero from backend
 */
export class GetHero {
    static readonly type = '[Heroes] Get hero';

    constructor(public payload: string) {
    }
}

/**
 * action for updating hero from backend
 */
export class UpdateHero {
    static readonly type = '[Heroes] Update hero';

    constructor(public payload: Hero) {
    }
}

/**
 * action for deleting hero from backend
 */
export class DeleteHero {
    static readonly type = '[Heroes] Delete hero';

    constructor(public payload: string) {
    }
}
