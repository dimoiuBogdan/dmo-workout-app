import { createAction, ActionType, getType, Reducer } from "typesafe-actions";

const actions = {
  setLoading: createAction("setLoading", (payload: boolean) => payload)(),
};

export type LoadingAction = ActionType<typeof actions>;
export const LoadingActions = actions;

export type LoadingState = Readonly<{
  loading: boolean;
}>;

const INITIAL_STATE: LoadingState = {
  loading: true,
};

export const loadingReducer: Reducer<LoadingState, LoadingAction> = (
  state: LoadingState = INITIAL_STATE,
  action: LoadingAction
) => {
  switch (action.type) {
    case getType(LoadingActions.setLoading):
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
