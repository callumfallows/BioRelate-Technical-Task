import * as auth0 from 'auth0-js'
import {WebAuth} from 'auth0-js'

/**
 *
 */
let webAuth: WebAuth = new auth0.WebAuth({
    domain: process.env.AUTHJS_DOMAIN,
    clientID: process.env.AUTHJS_CLIENT_ID,
    redirectUri: process.env.AUTHJS_CALLBACK_URL,
    responseType: 'token id_token',
    scope: 'openid profile',
})

/**
 *
 * @param hash
 */
export const parseCallback = async (hash) => {
    return new Promise<any>(async (resolve, reject) => {
        await webAuth.parseHash({hash: hash}, async function (err, authResult) {
            if (err) {
                console.log('error parsing hash', err)
                return reject(err)
            }
            await webAuth.client.userInfo(
                authResult.accessToken,
                function (err, user) {
                    if (err) {
                        reject(err)
                    }
                    if (user) {
                        resolve(user)
                    }
                },
            )
        })
    })
}

/**
 *
 */
export const checkSession = async () => {
    return new Promise<any>(async (resolve, reject) => {
        webAuth.checkSession({prompt: 'none'}, (err, authResult) => {
            if (err) {
                reject(err);
            } else {
                resolve(authResult);
            }
        });
    })
}

export default webAuth
