/**
 * Respositories Reduders
 */

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[]
}


interface Action {
    type: string,
    payload?: any;
}


/**
 *
 * @param state annotated as RepositoriesState.
 * @param action
 *
 * this reducer must return RepositoriesState, so that typeScript can properly infer type.
 */

const reducer = (state: RepositoriesState, action: Action): RepositoriesState =>{
    switch (action.type){
        /**
         * this is where user will start searching first.
         * this will be called as soon as the user clicks on search button
         * which means we will clear every thing from previous results therefore data will be [], and error will be null
         */
        case 'search_repositories':
            return { loading: true, error: null, data: [] }
        case 'search_repositories_success':
            return { loading: false, error: null, data: action.payload}
        case 'search_repositories_error':
            return { loading: false, error: action.payload, data: []}
        default:
            return state;
    }
}


export default reducer;