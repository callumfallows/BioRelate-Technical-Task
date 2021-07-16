import {Action, Reducer} from 'redux'
import {Auth0Error, Auth0UserProfile} from "auth0-js";

export interface InitialState {
    user: Auth0UserProfile | undefined
    error: Auth0Error | undefined
}

export const initialState: InitialState = {
    user: undefined,
    error: undefined,
}

export interface DispatchAction extends Action {
    payload: Partial<InitialState>
}

export const SET_USER = 'SET_USER'
export const SET_ERROR = 'SET_ERROR'

export const rootReducer: Reducer<InitialState, DispatchAction> = (
    state = initialState,
    action,
) => {
    if (action.type === SET_USER) {
        return {...state, user: action.payload.user}
    } else if (action.type === SET_ERROR) {
        return {...state, error: action.payload.error}
    } else {
        return state
    }
}
