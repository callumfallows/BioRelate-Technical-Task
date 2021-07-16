import * as React from 'react'
import {useEffect, useState} from 'react'
import {parseCallback} from '../../utilities/authentication'
import {useDispatch, useSelector} from 'react-redux'
import {Auth0Error, Auth0UserProfile} from 'auth0-js'
import {InitialState} from '../../store/root-reducer'
import {RootDispatcher} from '../../store/root-redux'
import {Redirect} from "react-router-dom";
import LoadSpinner from '../atoms/load-spinner.atom';


interface StateProps {
    user: Auth0UserProfile | undefined
    error: Auth0Error | undefined
}

interface Props {
    hash: string
}

const LoginAuthentication: React.FC<Props> = (props) => {
    const {hash} = props
    const dispatch = useDispatch()
    const rootDispatcher = new RootDispatcher(dispatch)
    const {user, error} = useSelector<InitialState, StateProps>(
        (state: InitialState) => {
            return {
                user: state.user,
                error: state.error,
            }
        },
    )
    const [loaded, setLoaded] = useState(false)
    const auth = async () => {
        try {
            const callback = await parseCallback(hash)
            rootDispatcher.setUser(callback)
        } catch (e) {
            rootDispatcher.setError(e)
        }
        setLoaded(true)
    }
    useEffect(() => {
        auth()
    }, [])

    if (error) {
        return <div>{JSON.stringify(error)}</div>
    }

    if (!loaded) {
        return <LoadSpinner/>
    }

    return <Redirect to='/profile'/>
}

export default LoginAuthentication
