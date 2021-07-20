import * as React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootDispatcher} from "../../store/root-redux";
import {InitialState} from "../../store/root-reducer";
import {useEffect, useState} from "react";
import {checkSession} from "../../utilities/authentication";
import LoadSpinner from "../atoms/load-spinner.atom";
import {Auth0UserProfile} from "auth0-js";
import {Redirect} from "react-router-dom";

/**
 * Authenticated Container
 *
 * This container will only render its children if the user is authenticated.
 * Otherwise it will automatically redirect to the login screen.
 *
 * Example:
 *
 *        <Authenticated>
 *            <div>Foo bar</div>
 *        </Authenticated>
 *
 * Or usage in with React Router:
 *
 *        <Route path="/foo" component={() => <Authenticated><div>Foo!</div></Authenticated>}/>
 *
 * @param Authenticated    Authenticated store.
 * @param redirect            URL to manually redirect to.
 * @param children            React child node to render.
 */
type Props = {
    children: React.ReactNode | string
}

interface StateProps {
    user: Auth0UserProfile | undefined
}

/**
 *
 * @param props
 * @constructor
 */

const AuthenticatedTemplate: React.FC<Props> = (props) => {
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)
    const auth = async () => {
        try {
            await checkSession();
        } catch (e) {
            console.log(e);
            setError(e.code)
        }
        setLoaded(true)
    }
    useEffect(() => {
        auth()
    }, [])

    if (!loaded) {
        return <LoadSpinner/>
    }

    if (error) {
        const redirectUrl = '/login#error=' + error;
        return <Redirect to={redirectUrl}/>
    }

    return <>{props.children}</>
}

export default AuthenticatedTemplate
