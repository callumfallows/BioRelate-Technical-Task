import {Action, Reducer} from 'redux'
import {Auth0Error, Auth0UserProfile} from "auth0-js";


export interface INotification {
    id: number,
    title: string,
    message: string,
    timestamp: string,
    read: boolean
}
export interface INotifications {
    count: number;
    notifications: Array<INotification>
}

export interface InitialState {
    user: Auth0UserProfile | undefined
    error: Auth0Error | undefined
    notifications: INotifications | undefined
}

export const initialState: InitialState = {
    user: undefined,
    error: undefined,
    notifications: undefined
}

export interface DispatchAction extends Action {
    payload: Partial<InitialState>
}

export const SET_USER = 'SET_USER'
export const SET_ERROR = 'SET_ERROR'
export const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS'
export const SET_NOTIFICATION_COUNT = 'SET_NOTIFICATION_COUNT'

export const rootReducer: Reducer<InitialState, DispatchAction> = (
    state = initialState,
    action,
) => {
    if (action.type === SET_USER) {
        return {...state, user: action.payload.user}
    } else if (action.type === SET_ERROR) {
        return {...state, error: action.payload.error}
    } else if (action.type === SET_NOTIFICATIONS) {
        return {...state, notifications: action.payload.notifications}
    } else if (action.type === SET_NOTIFICATION_COUNT) {
        return {...state, notifications: action.payload.notifications}
    } else {
        return state
    }
}
