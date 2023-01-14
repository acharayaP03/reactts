import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../Action-Types";
import { Action } from "../Actions";

export const searchRepositories = ( term: string ) =>{
    return async (dispatch: Dispatch<Action>) =>{
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        });

        try{
            const { data } =await axios.get('https://registry.npmjs.org/-/search', {
                params: {
                    text: term
                }
            });

            const names = data.objects.map((result: any) => result.package.name);
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })
        }catch (error: any){
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: error.message
            })
        }
    }
}