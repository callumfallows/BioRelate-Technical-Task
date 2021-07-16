import {Auth0UserProfile, Auth0Error} from 'auth0-js'
import {SET_USER, SET_ERROR, DispatchAction} from './root-reducer'
import {Dispatch} from "react";
import WebAuth from "../utilities/authentication";

export class RootDispatcher {
    private readonly dispatch: Dispatch<DispatchAction>

    constructor(dispatch: Dispatch<DispatchAction>) {
        this.dispatch = dispatch
    }

    setUser = (user: Auth0UserProfile) =>
        this.dispatch({type: SET_USER, payload: {user}})
    setError = (error: Auth0Error) =>
        this.dispatch({type: SET_ERROR, payload: {error}})

    /**
     * User login
     * @param username
     * @param password
     */
    async loginUser(username: string, password: string) {

        await WebAuth.login(
            {
                username,
                password,
                realm: "Username-Password-Auth-Test"
            },
            (error, result) => {
                if (error) {
                    console.log('error', error)
                } else {
                    console.log('result', result)
                }
            },
        )
    }
}
