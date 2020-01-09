import {Action, createSelector, Selector, State, StateContext} from '@ngxs/store';
import {HeroesStateModel, Hero} from './heroes.state.model';
import {LoadingStateEnum} from '../../../shared/enums/loadingState.enum';
import {
    GetHero,
    GetHeroesList,
    UpdateHero,
    DeleteHero, SetSearch
} from './heroes.actions';
import {LoadableEntityState} from '../../../shared/base/state/loadable-entity.state';
import {HeroesService} from '../../services/heroes/heroes.service';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';


@State<HeroesStateModel>({
    name: 'heroes',
    defaults: {
        heroesMap: new Map<number, Hero>(),
        loadingState: LoadingStateEnum.None,
        search: '',
    }
})
export class HeroesState extends LoadableEntityState {

    /**
     * selector for getting hero by id
     * @param id - hero id
     */
    static hero(id: number) {
        return createSelector(
            [HeroesState],
            (state: HeroesStateModel) => {
                return state.heroesMap.get(id);
            }
        );
    }

    /**
     * Selector for heroes list
     * @param state -current state
     */
    @Selector()
    public static heroes(state: HeroesStateModel) {
        const search = state.search.toLowerCase();
        const heroes = Array.from(state.heroesMap.values());
        return state.search ? heroes.filter(hero => hero.name.toLowerCase().includes(search)) : heroes;
    }

    @Selector()
    public static search(state: HeroesStateModel) {
        return state.search;
    }

    /**
     * Selector for loading state
     * @param state -current state
     */
    @Selector()
    public static loadingState(state: HeroesStateModel) {
        return state.loadingState;
    }

    constructor(
        private readonly heroesService: HeroesService,
    ) {
        super();
    }

    /**
     * method for setting search string
     * @param patchState - method for patching state
     */
    @Action(SetSearch)
    setSearch({patchState, getState}: StateContext<HeroesStateModel>, {payload}: GetHero) {
        patchState({loadingState: LoadingStateEnum.Loading});
        patchState({
            loadingState: LoadingStateEnum.Loaded,
            search: payload
        });
    }

    /**
     * method for getting heroesList
     * @param patchState - method for patching state
     */
    @Action(GetHeroesList)
    getHeroesList({patchState}: StateContext<HeroesStateModel>) {
        patchState({loadingState: LoadingStateEnum.Loading});
        return this.heroesService.getHeroesList().pipe(
            tap((result: Hero[]) => {
                const mapReady = result.map((hero) => ([hero.id, {...hero}]));
                // @ts-ignore
                patchState({loadingState: LoadingStateEnum.Loaded, heroesMap: new Map(mapReady)});
            }),
            catchError(err => {
                console.error(err);
                patchState({loadingState: LoadingStateEnum.Error});
                return of();
            })
        );
    }

    /**
     * method for getting hero
     * @param patchState - method for patching state
     */
    @Action(GetHero)
    getHero({patchState, getState}: StateContext<HeroesStateModel>, {payload}: GetHero) {
        patchState({loadingState: LoadingStateEnum.Loading});
        return this.heroesService.getHero(payload).pipe(
            tap((result) => {
                const {heroesMap} = getState();
                const hero = heroesMap.get(payload);
                if (result) {
                    heroesMap.set(payload, {...hero, ...result});
                    patchState({loadingState: LoadingStateEnum.Loaded, heroesMap});
                }
            }),
            catchError(err => {
                console.error(err);
                patchState({loadingState: LoadingStateEnum.Error});
                return of();
            }));
    }

    /**
     * method for updating hero
     * @param patchState - method for patching state
     */
    @Action(UpdateHero)
    updateHero({patchState, getState}: StateContext<HeroesStateModel>, {payload}: UpdateHero) {
        patchState({loadingState: LoadingStateEnum.Loading});
        return this.heroesService.updateHero(payload).pipe(
            tap(() => {
                const {
                    id, name, description
                } = payload;
                const {heroesMap} = getState();
                const hero = heroesMap.get(id);
                hero.name = name;
                hero.description = description;
                patchState({
                    loadingState: LoadingStateEnum.Loaded,
                    heroesMap: new Map<number, Hero>(heroesMap)
                });
            }),
            catchError(err => {
                console.error(err);
                return of();
            }));
    }

    /**
     * method for deleting hero
     * @param patchState - method for patching state
     */
    @Action(DeleteHero)
    deleteHero({patchState, getState}: StateContext<HeroesStateModel>, {payload}: DeleteHero) {
        patchState({loadingState: LoadingStateEnum.Loading});
        const id = payload;
        return this.heroesService.deleteHero(id).pipe(
            tap(() => {
                const {heroesMap} = getState();
                heroesMap.delete(id);
                patchState({
                    loadingState: LoadingStateEnum.Loaded,
                    heroesMap: new Map<number, Hero>(heroesMap)
                });
            }),
            catchError(err => {
                console.error(err);
                return of();
            }));
    }
}
