/**
 * Respositories Reduders
 */

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[]
}

interface SearchRepositoriesAction {
    type: 'search_repositories'
}

interface SearchRepositoriesSuccessAction {
    type: 'search_repositories_success'
    payload: string[]
}

interface SearchRepositoriesErrorAction {
    type: 'search_repositories_error';
    payload: string
}

type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction

enum ActionType {
    SEARCH_REPOSITORIES = 'search_repositories',
    SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
    SEARCH_REPOSITORIES_ERROR = 'search_repositories_error'
}

/**
 *
 * @param state annotated as RepositoriesState.
 * @param action
 *
 * this reducer must return RepositoriesState, so that typeScript can properly infer type.
 * actions always returns an object.
 */

const reducer = (state: RepositoriesState, action: Action): RepositoriesState =>{
    switch (action.type){
        /**
         * this is where user will start searching first.
         * this will be called as soon as the user clicks on search button
         * which means we will clear every thing from previous results therefore data will be [], and error will be null
         */
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] }
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload}
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: []}
        default:
            return state;
    }
}


export default reducer;