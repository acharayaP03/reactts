/**
 * Respositories Reduders
 */

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[]
}


const reducer = (state: RepositoriesState, action: any) =>{
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