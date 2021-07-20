import * as React from 'react'
import {Flex, Center, Heading, Box} from '@chakra-ui/react'
import {useDispatch, useSelector} from 'react-redux'
import bgImage from '../../../assets/img/login-background.png'
import {RootDispatcher} from "../../store/root-redux";
import {useEffect, useState} from "react";
import {checkSession} from "../../utilities/authentication";
import LoadSpinner from "../atoms/load-spinner.atom";

import {
    Redirect,
    useLocation
} from "react-router-dom";
import {InitialState} from "../../store/root-reducer";
import {Auth0UserProfile} from "auth0-js";
import LoginFormOrganism from "../organisms/login-form.organism";

            interface StateProps {
                user: Auth0UserProfile | undefined
            }

/**
 * Login Screen
 * @constructor
 */
export default function LoginPage() {
    const dispatch = useDispatch()
    const rootDispatcher = new RootDispatcher(dispatch);
    const loginUserDispatch = (username, password) => rootDispatcher.loginUser(username, password);
    const {user} = useSelector<InitialState, StateProps>(
        (state: InitialState) => {
            return {
                user: state.user
            }
        },
    )
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)
    const auth = async () => {
        try {
            const session = await checkSession();
            rootDispatcher.setUser(session.idTokenPayload)
        } catch (e) {
            console.log(e);
            setError(e);
        }
        setLoaded(true)
    }
    useEffect(() => {
        auth()
    }, [])

    let location = useLocation();
    if (!loaded) {
        return <LoadSpinner/>
    }

    if (location.hash) {
        console.log('error to toast', location)
    }

    if (user) {
        return <Redirect to='/profile'/>
    }

    if (error) {
        console.log('error set', error)
    }

    return (
        <Flex bg="linear-gradient(180deg, #78BCFF 0%, #0073E6 100%);">
            <Center bg="white" flex="1" h="100vh" w="50%">
                <Box w="100%" padding="16" flexDirection={'row'}>
                    <Heading marginBottom="8" color={'midnight.100'}>
                        Log in
                    </Heading>
                    <LoginFormOrganism loginUser={loginUserDispatch}/>
                </Box>
            </Center>
            <Center
                flex="1"
                h="100vh"
                w="50%"
                bgRepeat={'no-repeat'}
                bgSize={'cover'}
                opacity="0.4"
                bgImage={bgImage}
            />
        </Flex>
    )
}
