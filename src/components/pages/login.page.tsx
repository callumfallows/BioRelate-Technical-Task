import * as React from 'react'
import {Flex, Center, Text, Heading, Box} from '@chakra-ui/react'
import bgImage from '../../../assets/img/login-background.png'
import LoginFormOrganism from '../organisms/login-form.organism'
import {useDispatch} from 'react-redux'

import {RootDispatcher} from "../../store/root-redux";

/**
 * Login Screen
 * @constructor
 */
export default function LoginPage() {
    const dispatch = useDispatch()
    const rootDispatcher = new RootDispatcher(dispatch);
    const loginUserDispatch = (username, password) => rootDispatcher.loginUser(username, password);

    return (
        <Flex color="white" bg="linear-gradient(180deg, #78BCFF 0%, #0073E6 100%);">
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
