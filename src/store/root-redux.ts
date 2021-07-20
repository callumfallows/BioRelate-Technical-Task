import {Auth0UserProfile, Auth0Error} from 'auth0-js'
import {SET_USER, SET_ERROR, DispatchAction, SET_NOTIFICATIONS, INotifications, INotification} from './root-reducer'
import {Dispatch} from "react";
import WebAuth from "../utilities/authentication";
import axios from "axios";

export class RootDispatcher {
    private readonly dispatch: Dispatch<DispatchAction>

    constructor(dispatch: Dispatch<DispatchAction>) {
        this.dispatch = dispatch
    }

    setUser = (user: Auth0UserProfile) =>
        this.dispatch({type: SET_USER, payload: {user}})
    setError = (error: Auth0Error) =>
        this.dispatch({type: SET_ERROR, payload: {error}})
    setNotifications = (notifications: Array<INotification>) => {
        let unreadCount: number = 0;
        if (notifications && notifications.length > 0) {
            unreadCount = notifications.filter(item => item.read === false).length;
        }

        // @ts-ignore

        this.dispatch({
            type: SET_NOTIFICATIONS, payload: {
                notifications: {
                    count: unreadCount,
                    notifications: notifications
                }
            }
        });
    }

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

    async logoutUser() {
        await WebAuth.logout({
            returnTo: process.env.AUTHJS_LOGOUT_URL,
            clientID: process.env.AUTHJS_CLIENT_ID,
          });
    }

    async getNotifications() {
        const notifications = await axios.get('https://mockend.com/biorelate/fe-mock-api/notification?limit=10&timestamp_order=desc');
        return notifications.data;
    }
}
