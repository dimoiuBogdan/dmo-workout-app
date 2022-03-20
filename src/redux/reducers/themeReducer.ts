import { createAction, ActionType, getType, Reducer } from "typesafe-actions";

const actions = {
  setTheme: createAction("setTheme", (payload: string) => payload)(),
};

export type ThemeAction = ActionType<typeof actions>;
export const ThemeActions = actions;

export type ThemeState = Readonly<{
  theme: string;
}>;

const INITIAL_STATE: ThemeState = {
  theme: "light",
};

export const themeReducer: Reducer<ThemeState, ThemeAction> = (
  state: ThemeState = INITIAL_STATE,
  action: ThemeAction
) => {
  switch (action.type) {
    case getType(ThemeActions.setTheme):
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
