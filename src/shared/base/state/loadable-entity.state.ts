import {Action, State, StateContext, Selector} from '@ngxs/store';
import {LoadableEntityStateModel} from './loadable-entity.model';
import {LoadingStateEnum} from '../../enums/loadingState.enum';
import {SetLoadingState} from './loadable-entity.actions';

@State<LoadableEntityStateModel>({
    name: 'loadableEntity',
    defaults: {
        loadingState: LoadingStateEnum.None
    }
})
/**
 * Entity loading state base store
 */
export class LoadableEntityState {

    /**
     * Action for setting loading state for some loadable action
     * @param patchState - state updating method
     * @param payload - action payload
     */
    @Action(SetLoadingState)
    setLoadingState({patchState}: StateContext<LoadableEntityStateModel>, {payload}: SetLoadingState) {
        patchState({loadingState: payload});
    }

}
