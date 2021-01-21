export interface ContextState {
  loading: boolean;
  error: boolean;
  data: string[];
}

export enum ActionTypes {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error"
}

export type ContextAction =
  | { type: ActionTypes.LOADING }
  | { type: ActionTypes.SUCCESS; payload: string[] }
  | { type: ActionTypes.ERROR };

export const reducer = (state: ContextState, action: ContextAction) => {
  switch (action.type) {
    case ActionTypes.LOADING:
      return { ...state, loading: true };
    case ActionTypes.SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case ActionTypes.ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};
