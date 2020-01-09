import {LoadingStateEnum} from '../../enums/loadingState.enum';

export class SetLoadingState {
  static readonly type = '[LoadableEntity] Set loading state';
  constructor(public payload: LoadingStateEnum) { }
}
