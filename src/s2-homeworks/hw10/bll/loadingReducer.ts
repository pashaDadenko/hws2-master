type LoadingStateType = {
	isLoading: boolean;
};

const initState: LoadingStateType = {
	isLoading: false,
};

const CHANGE_LOADING = 'CHANGE_LOADING';

export const loadingReducer = (state = initState, action: LoadingActionType): LoadingStateType => {
	switch (action.type) {
		case CHANGE_LOADING:
			return { ...state, isLoading: action.isLoading };
		default:
			return state;
	}
};

type LoadingActionType = {
	type: typeof CHANGE_LOADING;
	isLoading: boolean;
};

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
	type: CHANGE_LOADING,
	isLoading,
});
